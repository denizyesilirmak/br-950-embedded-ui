import React from 'react'
import './PlotViewer.css'
import * as THREE from "three";
import Interpolation from './Interpolation'
import { TorusBufferGeometry } from 'three';
import gridImage from './grid.png'

const data = {
  A: 300,
  B: 300,
  C: 300,
  D: 350,
  E: 300,
  F: 300
}

const COLORS = {
  jet: [
    { pct: 0, color: { r: 0x00, g: 0x94, b: 0x0c } },
    { pct: 300, color: { r: 0x00, g: 0x94, b: 0x0c } },
    { pct: 320, color: { r: 0x00, g: 0xff, b: 0x77 } },
    { pct: 360, color: { r: 0x00, g: 0xff, b: 0xfc } },
    { pct: 400, color: { r: 0x00, g: 0xa4, b: 0xff } },
    { pct: 440, color: { r: 0x00, g: 0x09, b: 0xff } },
    { pct: 480, color: { r: 0xb3, g: 0x00, b: 0xff } },
    { pct: 520, color: { r: 0x86, g: 0x00, b: 0x00 } },
    { pct: 540, color: { r: 0x86, g: 0x00, b: 0x00 } },
    { pct: 1024, color: { r: 0x86, g: 0x00, b: 0x00 } },
  ]
}

class PlotViewer extends React.Component {
  constructor(props) {
    super(props)
    this.canvasHolder = React.createRef()

  }

  componentDidMount() {
    const start = performance.now()
    const width = this.canvasHolder.current.clientWidth
    const height = this.canvasHolder.current.clientHeight
    this.scene = new THREE.Scene()
    this.camera = new THREE.OrthographicCamera(width / - 18, width / 18, height / 18, height / - 18, 0, 1000)
    this.renderer = new THREE.WebGLRenderer({ antialias: TorusBufferGeometry, precision: "lowp" })
    this.renderer.setSize(width, height)
    this.canvasHolder.current.appendChild(this.renderer.domElement)
    this.initializeCamera()
    this.drawPlot(data)
    const end = performance.now()
    console.log(end - start)
    this.animate()
  }


  drawPlot = (data) => {
    const min = Math.min.apply(null, Object.values(data))
    console.log(min)

    data = {
      A: data.A - min,
      B: data.B - min,
      C: data.C - min,
      D: data.D - min,
      E: data.E - min,
      F: data.F - min
    }

    const ScanMatrix = this.createMatrix(data)
    this.plotGeometry = new THREE.PlaneGeometry(18, 18, ScanMatrix.length - 1, ScanMatrix.length - 1)

    ScanMatrix.flat(1).forEach((e, i) => {
      this.plotGeometry.vertices[i].z = e / (-48)
    })

    let sutun = 0
    let satir = 0
    for (let i = 0; i < this.plotGeometry.faces.length; i += 2) {
      satir = Math.trunc(i / ((ScanMatrix[0].length - 1) * 2))
      sutun = Math.trunc((i % ((ScanMatrix[0].length - 1) * 2)) / 2)
      // i. face
      let face = this.plotGeometry.faces[i]
      face.vertexColors[0] = new THREE.Color(this.getColor(ScanMatrix[satir][sutun] + min))
      face.vertexColors[2] = new THREE.Color(this.getColor(ScanMatrix[satir][sutun + 1] + min))
      face.vertexColors[1] = new THREE.Color(this.getColor(ScanMatrix[satir + 1][sutun] + min))
      // i+1 face
      face = this.plotGeometry.faces[i + 1]
      face.vertexColors[0] = new THREE.Color(this.getColor(ScanMatrix[satir + 1][sutun] + min))
      face.vertexColors[1] = new THREE.Color(this.getColor(ScanMatrix[satir + 1][sutun + 1] + min))
      face.vertexColors[2] = new THREE.Color(this.getColor(ScanMatrix[(satir)][sutun + 1] + min))
    }

    this.material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: false, vertexColors: THREE.VertexColors, side: THREE.DoubleSide });
    this.graphMesh = new THREE.Mesh(this.plotGeometry, this.material);
    this.scene.add(this.graphMesh);
    // this.graphMesh.rotation.x = 2

    // this.graphMesh.rotation.x = Math.sin(-90 * Math.PI / 180)
    // this.renderer.render(this.scene, this.camera);
    this.plotGeometry.computeBoundingBox()

    this.createGrid()


  }


  createGrid = async () => {
    this.gridGeometry = new THREE.PlaneGeometry(25, 25, 30, 30)

    const gridTexture = new THREE.TextureLoader().load(gridImage)
    const material = new THREE.MeshBasicMaterial({ map: gridTexture, transparent: true })

    this.gridMesh = new THREE.Mesh(this.gridGeometry, material);
    this.gridMesh.position.z = 2
    this.scene.add(this.gridMesh)
  }

  createMatrix = (data) => {
    const [a, b, c, d, e, f] = [data.A, data.B, data.C, data.D, data.E, data.F]

    const matrix = [
      [(a + d) / 2, a, a, a, (a + b) / 2],
      [d, e, a, f, b],
      [d, d, (e + f) / 2, b, b],
      [d, f, c, e, b],
      [(d + c) / 2, c, c, c, (b + c) / 2]
    ]

    return Interpolation(matrix, 5)
  }

  getColor = (pct) => {
    for (var i = 1; i < COLORS.jet.length - 1; i++) {
      if (pct < COLORS.jet[i].pct) {
        break;
      }
    }
    const lower = COLORS.jet[i - 1];
    const upper = COLORS.jet[i];
    const range = upper.pct - lower.pct;
    const rangePct = (pct - lower.pct) / range;
    const pctLower = 1 - rangePct;
    const pctUpper = rangePct;
    const color = {
      r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
      g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
      b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
    };
    return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
  }

  initializeCamera() {
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 15;
    // this.camera.updateProjectionMatrix();
  }

  animate = () => {
    requestAnimationFrame(this.animate)
    // this.graphMesh.rotation.z += 0.02
    this.renderer.render(this.scene, this.camera)
  }


  render() {
    return (
      <div className="plot-viewer" ref={this.canvasHolder}>

      </div>
    )
  }
}

export default PlotViewer