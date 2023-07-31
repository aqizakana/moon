
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';


const raycaster = new THREE.Raycaster();

let rot = Date.now() / 1000 * 360;
var Textmesh2;
var Textmesh3;
var Textmesh4;
var Textmesh5;
var Textmesh6;
var Textmesh7;
var Textmesh8;
var Textmesh9;
var Textmesh10;
var Textmesh11;
var Textmesh12;
var Textmesh13;
var Textmesh14;
var Textmesh15;
var Textmesh16;
var Textmesh17;
var Textmesh18;
var Textmesh19;
var Textmesh20;
var Textmesh21;
var Textmesh21;
var Textmesh22;
var Textmesh23;
var Textmesh24;
var Textmesh25;
var Textmesh26;
var Textmesh27;
var Textmesh28;
var Textmesh29;
var Textmesh30;
var Textmesh31;
var Textmesh32;
var Textmesh33;
var Textmesh34;
var Textmesh35;
var Textmesh36;
var Textmesh37;
var Textmesh38;
var Textmesh39;
var Textmesh40;
var Textmesh41;
var Textmesh42;
var Textmesh43;
var Textmesh44;
var Textmesh45;
var Textmesh46;
var Textmesh47;
var Textmesh48;
var Textmesh49;
var Textmesh50;
var Textmesh51;
var Textmesh52;
var Textmesh53;
var Textmesh54;
var Textmesh55;
var Textmesh56;
var Textmesh57;
var Textmesh58;
var Textmesh59;
var Textmesh60;
var Textmesh61;
var Textmesh62;
var Textmesh63;
var Textmesh64;
var Textmesh65;
var Textmesh66;
var Textmesh67;
var Textmesh68;
var Textmesh69;
var Textmesh70;
var Textmesh71;
var Textmesh72;
var Textmesh73;
var Textmesh74;
var Textmesh75;
var Textmesh76;
var Textmesh77;
var Textmesh78;
var Textmesh79;
var Textmesh80;
var Textmesh81;
var Textmesh82;
var Textmesh83;
var Textmesh84;
var Textmesh85;
var Textmesh86;
var Textmesh87;
var Textmesh88;


var Textmesh;
const loader = new FontLoader();
loader.load('ryumin_Regular.json', function (font) {

    const Textgeometry = new TextGeometry('月', {
        font: font,
        size: 200,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 5,
        bevelOffset: 0,
        bevelSegments: 5
    });
    Textgeometry.center();
    const TextMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1.0
    });
    Textmesh = new THREE.Mesh(Textgeometry, TextMaterial);
    Textmesh.position.set(0, 250, 0);
    Text.allign = 'center';
    Textmesh.rotation.set(0, 0, 0);
    scene.add(Textmesh);
});
loader.load('ryumin_Regular.json', function (font) {

    const Textgeometry2 = new TextGeometry('五', {
        font: font,
        size: 200,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 5,
        bevelOffset: 0,
        bevelSegments: 5
    });
    Textgeometry2.center();
    const TextMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1.0
    });
    Textmesh = new THREE.Mesh(Textgeometry2, TextMaterial2);
    Textmesh.position.set(0, 500, 300);
    Text.allign = 'center';
    Textmesh.rotation.set(0, 0, 0);
    scene.add(Textmesh);

    const Textgeometry3 = new TextGeometry('二', {
        font: font,
        size: 200,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 5,
        bevelOffset: 0,
        bevelSegments: 5
    });
    Textgeometry3.center();
    const TextMaterial3 = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1.0
    });
    Textmesh = new THREE.Mesh(Textgeometry3, TextMaterial3);
    Textmesh.position.set(0, 0, 300);
    Text.allign = 'center';
    Textmesh.rotation.set(0, 0, 0);
    scene.add(Textmesh);

    const Textgeometry4 = new TextGeometry('日', {
        font: font,
        size: 200,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 5,
        bevelOffset: 0,
        bevelSegments: 5
    });
    Textgeometry4.center();
    const TextMaterial4 = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1.0
    });
    Textmesh = new THREE.Mesh(Textgeometry4, TextMaterial4);
    Textmesh.position.set(0, -250, 300);
    Text.allign = 'center';
    Textmesh.rotation.set(0, 0, 0);
    scene.add(Textmesh);

    const Textgeometry5 = new TextGeometry('を', {
        font: font,
        size: 150,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 5,
        bevelOffset: 0,
        bevelSegments: 5
    });
    Textgeometry5.center();
    const TextMaterial5 = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1.0
    });
    Textmesh = new THREE.Mesh(Textgeometry5, TextMaterial5);
    Textmesh.position.set(0, 50, -100);
    Text.allign = 'center';
    Textmesh.rotation.set(0, Math.PI, 0);
    scene.add(Textmesh);

    const Textgeometry6 = new TextGeometry('見', {
        font: font,
        size: 150,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 5,
        bevelOffset: 0,
        bevelSegments: 5
    });
    Textgeometry6.center();
    const TextMaterial6 = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1.0
    });
    Textmesh = new THREE.Mesh(Textgeometry6, TextMaterial6);
    Textmesh.position.set(0, -150, -200);
    Text.allign = 'center';
    Textmesh.rotation.set(0, Math.PI, 0);
    scene.add(Textmesh);

    const Textgeometry7 = new TextGeometry('て', {
        font: font,
        size: 150,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 5,
        bevelOffset: 0,
        bevelSegments: 5
    });
    Textgeometry7.center();
    const TextMaterial7 = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1.0
    });
    Textmesh = new THREE.Mesh(Textgeometry7, TextMaterial7);
    Textmesh.position.set(0, -300, -300);
    Text.allign = 'center';
    Textmesh.rotation.set(0, Math.PI, 0);
    scene.add(Textmesh);

    const Textgeometry8 = new TextGeometry('い', {
        font: font,
        size: 150,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 5,
        bevelOffset: 0,
        bevelSegments: 5
    });
    Textgeometry8.center();
    const TextMaterial8 = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1.0
    });
    Textmesh = new THREE.Mesh(Textgeometry8, TextMaterial8);
    Textmesh.position.set(0, -450, -400);
    Text.allign = 'center';
    Textmesh.rotation.set(0, Math.PI, 0);
    scene.add(Textmesh);

    const Textgeometry9 = new TextGeometry('た', {
        font: font,
        size: 150,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 5,
        bevelOffset: 0,
        bevelSegments: 5
    });
    Textgeometry9.center();
    const TextMaterial9 = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1.0
    });
    Textmesh = new THREE.Mesh(Textgeometry9, TextMaterial9);
    Textmesh.position.set(0, -600, -500);
    Textmesh.rotation.set(0, Math.PI, 0);
    scene.add(Textmesh);


    const Textgeometry10 = new TextGeometry('五月二日', {
        font: font,
        size: 100,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 5,
        bevelOffset: 0,
        bevelSegments: 5
    });
    Textgeometry10.center();
    const TextMaterial10 = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3
    });
    const Textgeometry11 = new TextGeometry('を見ていた', {
        font: font,
        size: 100,
        height: 5,

        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 5,
        bevelOffset: 0,
        bevelSegments: 5
    });
    Textgeometry10.center();
    Textgeometry11.center();
    const TextMaterial11 = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3
    });

    Textmesh2 = new THREE.Mesh(Textgeometry10, TextMaterial10);
    Textmesh4 = new THREE.Mesh(Textgeometry10, TextMaterial10);
    Textmesh6 = new THREE.Mesh(Textgeometry10, TextMaterial10);
    Textmesh8 = new THREE.Mesh(Textgeometry10, TextMaterial10);
    Textmesh10 = new THREE.Mesh(Textgeometry10, TextMaterial10);
    Textmesh12 = new THREE.Mesh(Textgeometry10, TextMaterial10);
    Textmesh14 = new THREE.Mesh(Textgeometry10, TextMaterial10);
    Textmesh16 = new THREE.Mesh(Textgeometry10, TextMaterial10);
    Textmesh18 = new THREE.Mesh(Textgeometry10, TextMaterial10);
    Textmesh20 = new THREE.Mesh(Textgeometry10, TextMaterial10);


    Textmesh3 = new THREE.Mesh(Textgeometry11, TextMaterial11);
    Textmesh5 = new THREE.Mesh(Textgeometry11, TextMaterial11);
    Textmesh7 = new THREE.Mesh(Textgeometry11, TextMaterial11);
    Textmesh9 = new THREE.Mesh(Textgeometry11, TextMaterial11);
    Textmesh11 = new THREE.Mesh(Textgeometry11, TextMaterial11);
    Textmesh13 = new THREE.Mesh(Textgeometry11, TextMaterial11);
    Textmesh15 = new THREE.Mesh(Textgeometry11, TextMaterial11);
    Textmesh17 = new THREE.Mesh(Textgeometry11, TextMaterial11);
    Textmesh19 = new THREE.Mesh(Textgeometry11, TextMaterial11);
    Textmesh21 = new THREE.Mesh(Textgeometry11, TextMaterial11);




    Textmesh2.position.x = 220 * Math.sin(Math.PI * 0.5);
    Textmesh2.position.z = 700 * Math.cos(Math.PI * 2);
    Textmesh3.position.x = 500 * Math.sin(Math.PI * 2);
    Textmesh3.position.z = 300 * Math.cos(Math.PI * 2);
    Textmesh4.position.x = 500 * Math.sin(Math.PI * 2);
    Textmesh4.position.z = 800 * Math.cos(Math.PI * 2);
    Textmesh5.position.y = 350 * Math.sin(Math.PI);
    Textmesh5.position.z = 300 * Math.cos(Math.PI);
    Textmesh6.position.x = 800 * Math.sin(Math.PI * 2);
    Textmesh6.position.z = 400 * Math.cos(Math.PI * 2);
    Textmesh7.position.x = 900 * Math.sin(Math.PI * 2);
    Textmesh7.position.z = 500 * Math.cos(Math.PI * 2);
    Textmesh8.position.y = 800 * Math.sin(Math.PI * 5);
    Textmesh8.position.z = 600 * Math.cos(Math.PI * 2);
    Textmesh9.position.x = 300 * Math.sin(Math.PI * 2);
    Textmesh9.position.z = 700 * Math.cos(Math.PI * 2);
    Textmesh10.position.x = 600 * Math.sin(Math.PI * 2);
    Textmesh10.position.y = 800 * Math.cos(Math.PI * 2);
    Textmesh11.position.x = 100 * Math.sin(Math.PI * 2);
    Textmesh11.position.y = 500 * Math.cos(Math.PI * 2);
    Textmesh12.position.x = 300 * Math.sin(Math.PI * 2);
    Textmesh12.position.y = 600 * Math.cos(Math.PI * 3);
    Textmesh13.position.z = 400 * Math.sin(Math.PI * 2);
    Textmesh13.position.y = 600 * Math.cos(Math.PI * 2);
    Textmesh14.position.x = 500 * Math.sin(Math.PI * 2);
    Textmesh14.position.y = 666 * Math.cos(Math.PI * 2);
    Textmesh15.position.z = 600 * Math.sin(Math.PI * 8);
    Textmesh15.position.y = 400 * Math.cos(Math.PI * 2);
    Textmesh16.position.x = 500 * Math.sin(Math.PI * 2);
    Textmesh16.position.y = 200 * Math.cos(Math.PI * 2);
    Textmesh17.position.x = 800 * Math.sin(Math.PI * 2);
    Textmesh17.position.z = 450 * Math.cos(Math.PI * 2);
    Textmesh18.position.x = 300 * Math.sin(Math.PI * 2);
    Textmesh18.position.z = 100 * Math.cos(Math.PI * 2);
    Textmesh19.position.x = 500 * Math.sin(Math.PI * 2);
    Textmesh19.position.z = 900 * Math.cos(Math.PI * 2);
    Textmesh20.position.x = -600 * Math.sin(Math.PI * 2);
    Textmesh20.position.z = 900 * Math.cos(Math.PI * 2);
    Textmesh21.position.x = -300 * Math.sin(Math.PI * 2);
    Textmesh21.position.z = 900 * Math.cos(Math.PI * 2);









    container.add(Textmesh2);
    container.add(Textmesh3);
    container2.add(Textmesh4);
    container2.add(Textmesh5);
    container3.add(Textmesh6);
    container3.add(Textmesh7);
    container4.add(Textmesh8);
    container4.add(Textmesh9);
    container5.add(Textmesh10);
    container5.add(Textmesh11);
    container6.add(Textmesh12);
    container6.add(Textmesh13);
    container7.add(Textmesh2);
    container7.add(Textmesh12);
    container8.add(Textmesh14);
    container9.add(Textmesh15);
    container10.add(Textmesh16);
    container11.add(Textmesh17);
    container12.add(Textmesh18);
    container13.add(Textmesh19);
    container14.add(Textmesh20);
    container15.add(Textmesh21);








});
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x00ffff, 0, 5000);
const container = new THREE.Object3D();
scene.add(container);

const container2 = new THREE.Object3D();
scene.add(container2);

const container3 = new THREE.Object3D();
scene.add(container3);
const container4 = new THREE.Object3D();
scene.add(container4);
const container5 = new THREE.Object3D();
scene.add(container5);
const container6 = new THREE.Object3D();
scene.add(container6);
const container7 = new THREE.Object3D();
scene.add(container7);
const container8 = new THREE.Object3D();
scene.add(container8);
const container9 = new THREE.Object3D();
scene.add(container9);
const container10 = new THREE.Object3D();
scene.add(container10);
const container11 = new THREE.Object3D();
scene.add(container11);
const container12 = new THREE.Object3D();
scene.add(container12);
const container13 = new THREE.Object3D();
scene.add(container13);
const container14 = new THREE.Object3D();
scene.add(container14);
const container15 = new THREE.Object3D();
scene.add(container15);





for (let i = 0; i < 7; i++) {
    const clonedContainer = container7.clone();
    clonedContainer.rotation.y += i * 0.001;
    clonedContainer.rotation.x += i * 0.001;
    scene.add(clonedContainer);
    if (i % 2 == 0) {
        clonedContainer.position.x += i * 100;
        clonedContainer.position.y += i * 100;
        clonedContainer.position.z += i * 100;
    } else {
        clonedContainer.position.x -= i * 100;
        clonedContainer.position.y -= i * 100;
        clonedContainer.position.z -= i * 100;
    }
}

// サイズを指定
const width = window.innerWidth;
const height = window.innerHeight;


class Spheres extends THREE.Mesh {
    constructor() {
        const geometry = new THREE.SphereGeometry(1000, 30, 30);
        const material = new THREE.MeshBasicMaterial({ wireframe: true, transparent: true, opacity: 0.1, fog: true }); {

        }
        super(geometry, material);
    }
}

// レンダラーを作成
const canvasElement = document.querySelector("#myCanvas2");
const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
});
renderer.setSize(width, height);

// シーンを作成


// カメラを作成
const camera = new THREE.PerspectiveCamera(50, width / height, 1, 2000);

function initCameraPosition() {
    // カメラの初期座標を設定
    //index.jsのcamera.positionと同期させる

    camera.position.set(-50, 2000, 2000);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
}

initCameraPosition();


const AmbientLight = new THREE.AmbientLight(0xffffff, 1.0);
scene.add(AmbientLight);

const mesh = new Spheres();
scene.add(mesh);

// カメラコントローラーを作成
const controls = new OrbitControls(camera, canvasElement);
//カメラのz座標固定
controls.minDistance = 2000; // Set the minimum distance (z-position)
controls.maxDistance = 2000; // Set the maximum distance (z-position)
//カメラのy座標固定
controls.minPolarAngle = Math.PI / 2; // Set the minimum vertical rotation angle (y-position)
controls.maxPolarAngle = Math.PI / 2; // Set the maximum vertical rotation angle (y-position)

window.addEventListener("resize", onWindowResize);

// ウィンドウのサイズが変更された時の処理
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

createStarField();


function createStarField() {
    // 頂点情報を格納する配列
    const vertices = [];
    // 配置する範囲
    const SIZE = 8000;
    // 配置する個数
    const LENGTH = 7000;
    for (let i = 0; i < LENGTH; i++) {
        rot += 0.1;
        const x = SIZE * (Math.random() - 0.5) * (Math.sin(rot));
        const y = SIZE * (Math.random() - 0.5) * (Math.cos(rot));;
        const z = SIZE * (Math.random() - 0.5) * (Math.sin(rot));;

        vertices.push(x, y, z);
    }
    // 形状データを作成
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

    // マテリアルを作成
    const material = new THREE.PointsMaterial({
        // 一つ一つのサイズ
        size: 10,
        transparent: true,
        opacity: 0.5,
        // 色
        color: 0xffffff,
    });
    // 物体を作成
    const pointmesh = new THREE.Points(geometry, material);

    scene.add(pointmesh);
}

//
const canvas = document.querySelector('#myCanvas2');
const mouse = new THREE.Vector2();
canvas.addEventListener('mousemove', handleMouseMove);

//マウスの座標を取る
function handleMouseMove(event) {
    const element = event.currentTarget;
    // canvas要素上のXY座標
    const x = event.clientX - element.offsetLeft;
    const y = event.clientY - element.offsetTop;
    // canvas要素の幅・高さ
    const w = element.offsetWidth;
    const h = element.offsetHeight;

    // -1〜+1の範囲で現在のマウス座標を登録する
    mouse.x = (x / w) * 2 - 1;
    mouse.y = -(y / h) * 2 + 1;
}

tick();

// 毎フレーム時に実行されるループイベントです
function tick() {
    // レンダリング
    renderer.render(scene, camera);
    requestAnimationFrame(tick);


    container.rotation.y += 0.005;
    container2.rotation.x += 0.003;
    container2.rotation.z += 0.001;
    container3.rotation.y -= 0.001;
    container3.rotation.z += 0.003
    container4.rotation.y += 0.001;
    container4.rotation.x -= 0.001;
    container4.rotation.z += 0.003;
    container5.rotation.y -= 0.001;
    container5.rotation.x -= 0.001
    container5.rotation.z += 0.001;
    container6.rotation.y += 0.003;
    container6.rotation.x -= 0.001;
    container6.rotation.z += 0.001;
    container7.rotation.y += 0.001;
    container7.rotation.x += 0.001;
    container7.rotation.z -= 0.003;
    container8.rotation.y += 0.001;
    container8.rotation.x += 0.001;
    container8.rotation.z += 0.001;
    container9.rotation.y += 0.001;
    container9.rotation.x -= 0.001;
    container9.rotation.z += 0.001;
    container10.rotation.y -= 0.001;
    container10.rotation.x += 0.001;
    container10.rotation.z += 0.001;
    container11.rotation.y -= 0.001;
    container11.rotation.x += 0.001;
    container11.rotation.z -= 0.001;
    container12.rotation.y += 0.001;
    container12.rotation.x += 0.001;
    container12.rotation.z += 0.05;
    container13.rotation.y += 0.001;
    container13.rotation.x += 0.001;
    container13.rotation.z += 0.005;
    container14.rotation.y += 0.001;
    container14.rotation.x += 0.001;
    container14.rotation.z += 0.001;
    container15.rotation.y -= 0.001;
    container15.rotation.x -= 0.001;

    // レイキャスト = マウス位置からまっすぐに伸びる光線ベクトルを生成
    raycaster.setFromCamera(mouse, camera);

    // その光線とぶつかったオブジェクトを得る
    const objectsToIntersect = scene.children.filter(obj => obj !== mesh);
    const intersects = raycaster.intersectObjects(objectsToIntersect);


    if (intersects.length > 0) {
        // ぶつかったオブジェクトに対してなんかする
        const cameraPosition = camera.position.clone();
        // カメラの位置の絶対値を取得

        const x = Math.abs(container.position.x);
        const y = Math.abs(container.position.y);
        const z = Math.abs(container.position.z);


        // RGB値を計算
        const r = Math.floor(x % 256);
        const g = Math.floor(y % 256);
        const b = Math.floor(z % 256);
        //containerの色を変える
    }

    controls.update(); // カメラコントローラーの更新

}


