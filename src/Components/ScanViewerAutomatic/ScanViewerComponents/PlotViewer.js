import React from 'react'
import './PlotViewer.css'
import * as THREE from "three";
import Interpolation from './Interpolation'
import gridImage from './grid.png'
import Utils from '../../../Utils'

let data = {
  A: 1024,
  B: 1024,
  C: 1024,
  D: 1024,
  E: 1024,
  F: 1024
}

// const COLORS = {
//   jet: [
//     { pct: 0, color: { r: 0x00, g: 0x94, b: 0x0c } },
//     { pct: 300, color: { r: 0x00, g: 0x94, b: 0x0c } },
//     { pct: 320, color: { r: 0x23, g: 0xff, b: 0x89 } },
//     { pct: 360, color: { r: 0x00, g: 0xff, b: 0x89 } },
//     { pct: 400, color: { r: 0x00, g: 0xff, b: 0xfd } },
//     { pct: 440, color: { r: 0x00, g: 0xc5, b: 0xff } },
//     { pct: 480, color: { r: 0x00, g: 0x70, b: 0xff } },
//     { pct: 520, color: { r: 0x00, g: 0x0d, b: 0xa4 } },
//     { pct: 540, color: { r: 0x00, g: 0x00, b: 0x00 } },
//     { pct: 1024, color: { r: 0x09, g: 0x0d, b: 0x39 } },
//   ]
// }

const COLORS = {
  jet: [
    { pct: 0, color: { r: 0x00, g: 0x94, b: 0x0c } },
    { pct: 300, color: { r: 0x00, g: 0x94, b: 0x0c } },
    { pct: 320, color: { r: 0x23, g: 0xff, b: 0x89 } },
    { pct: 360, color: { r: 0x00, g: 0xff, b: 0x89 } },
    { pct: 400, color: { r: 0x00, g: 0xff, b: 0xfd } },
    { pct: 440, color: { r: 0x00, g: 0xc5, b: 0xff } },
    { pct: 480, color: { r: 0x00, g: 0x70, b: 0xff } },
    { pct: 520, color: { r: 0x00, g: 0x0d, b: 0xa4 } },
    { pct: 540, color: { r: 0x5, g: 0x5, b: 0x30 } },
    { pct: 1024, color: { r: 0x09, g: 0x0d, b: 0x39 } },
  ]
}

class PlotViewer extends React.Component {
  constructor(props) {
    super(props)
    this.canvasHolder = React.createRef()

    this.state = {
      ready: false
    }

    data = this.props.plotData

  }

  componentDidMount() {
    const width = this.canvasHolder.current.clientWidth
    const height = this.canvasHolder.current.clientHeight
    const scalar = 35
    const min = Math.min.apply(null, Object.values(data))
    const max = Math.max.apply(null, Object.values(data))

    this.scene = new THREE.Scene()
    this.camera = new THREE.OrthographicCamera(width / - scalar, width / scalar, height / scalar, height / - scalar, 0, 1000)
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setClearColor(0xffffff, 0);
    this.renderer.setSize(width, height)
    this.canvasHolder.current.appendChild(this.renderer.domElement)
    this.initializeCamera()


    //creating meshes
    this.plotMesh = this.drawPlot(data, max, min)
    this.gridMesh = this.createGrid(max, min)

    const box = new THREE.BoxHelper(this.plotMesh, 0xffffff);
    this.scene.add(box);


    this.scanMeshGroup = new THREE.Group()
    this.scanMeshGroup.add(this.plotMesh)
    this.scanMeshGroup.add(this.gridMesh)
    this.scanMeshGroup.add(box)
    this.scene.add(this.scanMeshGroup)


    this.setState({ ready: true })
    this.animate()
  }

  componentWillUnmount() {
    this.clearMemory()
  }

  clearMemory = () => {
    this.over = true
    this.renderer.dispose()
    this.plotGeometry.dispose()
    this.animate = null
  }

  drawPlot = (data, max, min) => {
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

    Utils.flatMatrix(ScanMatrix, 1).forEach((e, i) => {
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
    const m = new THREE.Mesh(this.plotGeometry, this.material)
    m.position.z = (max / (32 * 2)) / 2

    return m
  }


  createGrid = (max, min) => {
    this.gridGeometry = new THREE.PlaneGeometry(23, 23, 1, 1)
    const gridTexture = new THREE.TextureLoader().load(gridImage)
    const material = new THREE.MeshBasicMaterial({ map: gridTexture, transparent: true })
    const gridMesh = new THREE.Mesh(this.gridGeometry, material);
    gridMesh.position.z = ((max / (32 * 2)) / 2) + 0.02
    return gridMesh
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
    return Interpolation(matrix, 10)
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

  crazyLerp = (oldValue, newValue, step) => {
    if (Math.abs(oldValue - newValue) < 0.05) {
      return newValue
    }
    else if (oldValue > newValue) {
      return oldValue - step
    }
    else if (oldValue < newValue) {
      return oldValue + step
    }
    else {
      return oldValue
    }
  }

  initializeCamera() {
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 15;
    // this.camera.updateProjectionMatrix();
  }

  animate = () => {
    if (this.over) {
      return
    }
    window.requestAnimationFrame(this.animate)
    this.scanMeshGroup.rotation.z = this.crazyLerp(this.scanMeshGroup.rotation.z, this.props.rotZ, 0.1)
    this.scanMeshGroup.rotation.x = this.crazyLerp(this.scanMeshGroup.rotation.x, this.props.rotX, 0.1)
    this.renderer.render(this.scene, this.camera)
  }


  render() {
    return (
      <div className="plot-viewer" ref={this.canvasHolder}>
        {
          !this.state.ready ? <div className="loading-plot">Loading 3D Plot</div> : null
        }
      </div>
    )
  }
}

export default PlotViewer