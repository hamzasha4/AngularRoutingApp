import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  @Input() public rotationSpeedX: number = 0.05;

  @Input() public rotationSpeedY: number = 0.01;

  @Input() public size: number = 200;


  //* Stage Properties

  @Input() public cameraZ: number = 150;

  @Input() public fieldOfView: number = 1;

  @Input('nearClipping') public nearClippingPlane: number = 1;

  @Input('farClipping') public farClippingPlane: number = 1000;

  private camera!: THREE.PerspectiveCamera;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
    private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private character: THREE.Object3D;
  private loader: FBXLoader;
  private spotlight: THREE.SpotLight;
  private control : OrbitControls;
  private animLoader: FBXLoader;
  private mixer: THREE.AnimationMixer;
  private animstyle : any;
  private clock: THREE.Clock;
  private createScene() {
    //* Scene
    
    this.scene = new THREE.Scene();
    this.spotlight = new THREE.SpotLight(0xffffff,2);
    this.spotlight.position.set(0,0,100);
    this.scene.add(this.spotlight);
    // this.scene.background = new THREE.Color(0x000000)
    this.loader = new FBXLoader();
    this.loader.load('./assets/Model/character.fbx', (object) => {
        this.character = object;
        this.character.scale.set(0.015,0.015,0.015);
        this.character.position.set(1,-1.2,0);
        this.animLoader = new FBXLoader();
        this.animLoader.load('./assets/Model/Happy.fbx',(animation) => {
        this.mixer = new THREE.AnimationMixer(this.character);
        this.animstyle = this.mixer.clipAction(animation.animations[0]) 
        })
        this.scene.add(this.character);
    });
  
    //*Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    )
    this.camera.position.z = this.cameraZ;
    this.clock = new THREE.Clock();
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }
  private getAnimation(){
    if(this.mixer != null){
      this.mixer.update(this.clock.getDelta());
    }
    if(this.animstyle != null){
      this.animstyle.play();
    }
  }
  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas,
      antialias: true,
      alpha: true
     });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.control = new OrbitControls(this.camera,this.renderer.domElement);
    let component: AnimationComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.getAnimation();
      component.renderer.render(component.scene, component.camera);
    }());
  }
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
  }

}
