
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';


const raycaster = new THREE.Raycaster();
var Textmesh;
const loader = new FontLoader();

loader.load('WebSubsetFont_Regular.json', function (font) {

    const Textgeometry = new TextGeometry('月', {
        font: font,
        size: 600,
        height: 10,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 15,
        bevelSize: 5,
        bevelOffset: 0,
        bevelSegments: 5
    });
    Textgeometry.center();
    const TextMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.7

    });
    Textmesh = new THREE.Mesh(Textgeometry, TextMaterial);
    Textmesh.position.set(0, 0, 0);
    Textmesh.rotation.set(0, 0, 0);
    scene.add(Textmesh);
});

loader.load('WebSubsetFont_Regular.json', function (font) {
    const Textgeometry2 = new TextGeometry('晴', {
        font: font,
        size: 40,
        height: 1,
        curveSegments: 2,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry2A = new TextGeometry('れ', {
        font: font,
        size: 40,
        height: 1,
        curveSegments: 2,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry2B = new TextGeometry('の', {
        font: font,
        size: 40,
        height: 1,
        curveSegments: 2,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry2C = new TextGeometry('海', {
        font: font,
        size: 40,
        height: 1,
        curveSegments: 2,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });



    const Textgeometry3 = new TextGeometry('氷', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 2,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry3A = new TextGeometry('の', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 2,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry3B = new TextGeometry('海', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 2,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry4 = new TextGeometry('静', {
        font: font,
        size: 100,
        height: 1,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry4A = new TextGeometry('か', {
        font: font,
        size: 100,
        height: 1,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry4B = new TextGeometry('の', {
        font: font,
        size: 100,
        height: 1,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry4C = new TextGeometry('海', {
        font: font,
        size: 100,
        height: 1,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry5 = new TextGeometry('嵐の海', {
        font: font,
        size: 100,
        height: 1,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });





    const Textgeometry6 = new TextGeometry('危機', {
        font: font,
        size: 70,
        height: 1,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry6A = new TextGeometry('の海', {
        font: font,
        size: 70,
        height: 1,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });


    const Textgeometry7 = new TextGeometry('豊穣', {
        font: font,
        size: 80,
        height: 1,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry7A = new TextGeometry('の海', {
        font: font,
        size: 80,
        height: 1,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry8 = new TextGeometry('神酒の海', {
        font: font,
        size: 80,
        height: 1,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,

        bevelSegments: 2
    });
    const Textgeometry9 = new TextGeometry('蒸気の海', {
        font: font,
        size: 30,
        height: 1,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry10 = new TextGeometry('雲の', {
        font: font,
        size: 70,
        height: 1,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry10A = new TextGeometry('海', {
        font: font,
        size: 70,
        height: 1,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry11 = new TextGeometry('湿りの海', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry12 = new TextGeometry('東の海', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry18 = new TextGeometry('モスク', {

        font: font,
        size: 80,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry18A = new TextGeometry('ワの海', {

        font: font,
        size: 80,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const container = new THREE.Object3D();
    scene.add(container);

    const TextMaterial2 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const r = 990;
    const phi2 = 70 * (Math.PI / 180);
    const theta2 = 10 * (Math.PI / 180);
    const sphericalPos2 = new THREE.Spherical(r, phi2, theta2);
    const Textmesh2 = new THREE.Mesh(Textgeometry2, TextMaterial2);
    Textmesh2.position.setFromSpherical(sphericalPos2);
    container.add(Textmesh2);
    const vector = new THREE.Vector3();
    vector.copy(Textmesh2.position).multiplyScalar(2);
    Textmesh2.lookAt(vector);

    const TextMaterial2A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh2A = new THREE.Mesh(Textgeometry2A, TextMaterial2A);
    const theta2A = 14 * (Math.PI / 180);
    const sphericalPos2A = new THREE.Spherical(r, phi2, theta2A);
    Textmesh2A.position.setFromSpherical(sphericalPos2A);
    container.add(Textmesh2A);
    vector.copy(Textmesh2A.position).multiplyScalar(2);
    Textmesh2A.lookAt(vector);

    const TextMaterial2B = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh2B = new THREE.Mesh(Textgeometry2B, TextMaterial2B);
    const theta2B = 18 * (Math.PI / 180);
    const sphericalPos2B = new THREE.Spherical(r, phi2, theta2B);
    Textmesh2B.position.setFromSpherical(sphericalPos2B);
    container.add(Textmesh2B);
    vector.copy(Textmesh2B.position).multiplyScalar(2);
    Textmesh2B.lookAt(vector);

    const TextMaterial2C = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh2C = new THREE.Mesh(Textgeometry2C, TextMaterial2C);
    const theta2C = 22 * (Math.PI / 180);
    const sphericalPos2C = new THREE.Spherical(r, phi2, theta2C);
    Textmesh2C.position.setFromSpherical(sphericalPos2C);
    container.add(Textmesh2C);
    vector.copy(Textmesh2C.position).multiplyScalar(2);
    Textmesh2C.lookAt(vector);

    const TextMaterial3 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh3 = new THREE.Mesh(Textgeometry3, TextMaterial3);
    const theta3 = -10 * (Math.PI / 180);
    const phi3 = 55 * (Math.PI / 180);
    const sphericalPos3 = new THREE.Spherical(r, phi3, theta3);
    Textmesh3.position.setFromSpherical(sphericalPos3);
    container.add(Textmesh3);
    vector.copy(Textmesh3.position).multiplyScalar(2);
    Textmesh3.lookAt(vector);

    const TextMaterial3A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh3A = new THREE.Mesh(Textgeometry3A, TextMaterial3A);
    const theta3A = -5 * (Math.PI / 180);
    const phi3A = 55 * (Math.PI / 180);
    const sphericalPos3A = new THREE.Spherical(r, phi3A, theta3A);
    Textmesh3A.position.setFromSpherical(sphericalPos3A);
    container.add(Textmesh3A);
    vector.copy(Textmesh3A.position).multiplyScalar(2);
    Textmesh3A.lookAt(vector);

    const TextMaterial3B = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh3B = new THREE.Mesh(Textgeometry3B, TextMaterial3B);
    const theta3B = 0 * (Math.PI / 180);
    const phi3B = 55 * (Math.PI / 180);
    const sphericalPos3B = new THREE.Spherical(r, phi3B, theta3B);
    Textmesh3B.position.setFromSpherical(sphericalPos3B);
    container.add(Textmesh3B);
    vector.copy(Textmesh3B.position).multiplyScalar(2);
    Textmesh3B.lookAt(vector);


    const TextMaterial4 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh4 = new THREE.Mesh(Textgeometry4, TextMaterial4);
    const theta4 = 20 * (Math.PI / 180);
    const phi4 = 80 * (Math.PI / 180);
    const sphericalPos4 = new THREE.Spherical(r, phi4, theta4);
    Textmesh4.position.setFromSpherical(sphericalPos4);
    container.add(Textmesh4);
    vector.copy(Textmesh4.position).multiplyScalar(2);
    Textmesh4.lookAt(vector);

    const TextMaterial4A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh4A = new THREE.Mesh(Textgeometry4A, TextMaterial4A);
    const theta4A = 30 * (Math.PI / 180);
    const phi4A = 80 * (Math.PI / 180);
    const sphericalPos4A = new THREE.Spherical(r, phi4A, theta4A);
    Textmesh4A.position.setFromSpherical(sphericalPos4A);
    container.add(Textmesh4A);
    vector.copy(Textmesh4A.position).multiplyScalar(2);
    Textmesh4A.lookAt(vector);

    const TextMaterial4B = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh4B = new THREE.Mesh(Textgeometry4B, TextMaterial4B);
    const theta4B = 40 * (Math.PI / 180);
    const phi4B = 80 * (Math.PI / 180);
    const sphericalPos4B = new THREE.Spherical(r, phi4B, theta4B);
    Textmesh4B.position.setFromSpherical(sphericalPos4B);
    container.add(Textmesh4B);
    vector.copy(Textmesh4B.position).multiplyScalar(2);
    Textmesh4B.lookAt(vector);

    const TextMaterial4C = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh4C = new THREE.Mesh(Textgeometry4C, TextMaterial4C);
    const theta4C = 50 * (Math.PI / 180);
    const phi4C = 80 * (Math.PI / 180);
    const sphericalPos4C = new THREE.Spherical(r, phi4C, theta4C);
    Textmesh4C.position.setFromSpherical(sphericalPos4C);
    container.add(Textmesh4C);
    vector.copy(Textmesh4C.position).multiplyScalar(2);
    Textmesh4C.lookAt(vector);

    const TextMaterial5 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh5 = new THREE.Mesh(Textgeometry5, TextMaterial5);
    const theta5 = -40 * (Math.PI / 180);
    const phi5 = 95 * (Math.PI / 180);
    const sphericalPos5 = new THREE.Spherical(r, phi5, theta5);
    Textmesh5.position.setFromSpherical(sphericalPos5);
    container.add(Textmesh5);
    vector.copy(Textmesh5.position).multiplyScalar(2);
    Textmesh5.lookAt(vector);
    scene.add(Textmesh5);
    Textgeometry5.center();


    const TextMaterial6 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh6 = new THREE.Mesh(Textgeometry6, TextMaterial6);
    const theta6 = 40 * (Math.PI / 180);
    const phi6 = 60 * (Math.PI / 180);
    const sphericalPos6 = new THREE.Spherical(r, phi6, theta6);
    Textmesh6.position.setFromSpherical(sphericalPos6);
    container.add(Textmesh6);
    vector.copy(Textmesh6.position).multiplyScalar(2);
    Textmesh6.lookAt(vector);
    scene.add(Textmesh6);

    const TextMaterial6A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh6A = new THREE.Mesh(Textgeometry6A, TextMaterial6A);
    const theta6A = 53 * (Math.PI / 180);
    const phi6A = 60 * (Math.PI / 180);
    const sphericalPos6A = new THREE.Spherical(r, phi6A, theta6A);
    Textmesh6A.position.setFromSpherical(sphericalPos6A);
    container.add(Textmesh6A);
    vector.copy(Textmesh6A.position).multiplyScalar(2);
    Textmesh6A.lookAt(vector);
    scene.add(Textmesh6A);

    const TextMaterial7 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh7 = new THREE.Mesh(Textgeometry7, TextMaterial7);
    const theta7 = 35 * (Math.PI / 180);
    const phi7 = 90 * (Math.PI / 180);
    const sphericalPos7 = new THREE.Spherical(r, phi7, theta7);
    Textmesh7.position.setFromSpherical(sphericalPos7);
    container.add(Textmesh7);
    vector.copy(Textmesh7.position).multiplyScalar(2);
    Textmesh7.lookAt(vector);
    scene.add(Textmesh7);

    const TextMaterial7A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh7A = new THREE.Mesh(Textgeometry7A, TextMaterial7A);
    const theta7A = 48 * (Math.PI / 180);
    const phi7A = 90 * (Math.PI / 180);
    const sphericalPos7A = new THREE.Spherical(r, phi7A, theta7A);
    Textmesh7A.position.setFromSpherical(sphericalPos7A);
    container.add(Textmesh7A);
    vector.copy(Textmesh7A.position).multiplyScalar(2);
    Textmesh7A.lookAt(vector);
    scene.add(Textmesh7A);

    const TextMaterial8 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh8 = new THREE.Mesh(Textgeometry8, TextMaterial8);
    Textgeometry8.center();
    const theta8 = 50 * (Math.PI / 180);
    const phi8 = 100 * (Math.PI / 180);
    const sphericalPos8 = new THREE.Spherical(r, phi8, theta8);
    Textmesh8.position.setFromSpherical(sphericalPos8);
    container.add(Textmesh8);
    vector.copy(Textmesh8.position).multiplyScalar(3);
    Textmesh8.rotation.set(50, 50, 0);
    Textmesh8.lookAt(vector);
    scene.add(Textmesh8);

    const TextMaterial9 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh9 = new THREE.Mesh(Textgeometry9, TextMaterial9);
    const theta9 = -8 * (Math.PI / 180);
    const phi9 = 80 * (Math.PI / 180);
    const sphericalPos9 = new THREE.Spherical(r, phi9, theta9);
    Textmesh9.position.setFromSpherical(sphericalPos9);
    container.add(Textmesh9);
    vector.copy(Textmesh9.position).multiplyScalar(2);
    Textmesh9.lookAt(vector);
    scene.add(Textmesh9);

    const TextMaterial10 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh10 = new THREE.Mesh(Textgeometry10, TextMaterial10);
    const theta10 = - 20 * (Math.PI / 180);
    const phi10 = 120 * (Math.PI / 180);
    const sphericalPos10 = new THREE.Spherical(r, phi10, theta10);
    Textmesh10.position.setFromSpherical(sphericalPos10);
    container.add(Textmesh10);
    vector.copy(Textmesh10.position).multiplyScalar(2);
    Textmesh10.lookAt(vector);
    scene.add(Textmesh10);

    const TextMaterial10A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh10A = new THREE.Mesh(Textgeometry10A, TextMaterial10A);
    const theta10A = -8 * (Math.PI / 180);
    const phi10A = 120 * (Math.PI / 180);
    const sphericalPos10A = new THREE.Spherical(r, phi10A, theta10A);
    Textmesh10A.position.setFromSpherical(sphericalPos10A);
    container.add(Textmesh10A);
    vector.copy(Textmesh10A.position).multiplyScalar(2);
    Textmesh10A.lookAt(vector);
    scene.add(Textmesh10A);

    const TextMaterial11 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh11 = new THREE.Mesh(Textgeometry11, TextMaterial11);
    const theta11 = - 30 * (Math.PI / 180);
    const phi11 = 115 * (Math.PI / 180);
    const sphericalPos11 = new THREE.Spherical(r, phi11, theta11);
    Textmesh11.position.setFromSpherical(sphericalPos11);
    container.add(Textmesh11);
    vector.copy(Textmesh11.position).multiplyScalar(2);
    Textmesh11.lookAt(vector);
    scene.add(Textmesh11);
    Textgeometry11.center();



    const TextMaterial12 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh12 = new THREE.Mesh(Textgeometry12, TextMaterial12);
    const theta12 = - 120 * (Math.PI / 180);
    const phi12 = 110 * (Math.PI / 180);
    const sphericalPos12 = new THREE.Spherical(r, phi12, theta12);
    Textmesh12.position.setFromSpherical(sphericalPos12);
    container.add(Textmesh12);
    Textgeometry12.center();
    vector.copy(Textmesh12.position).multiplyScalar(2);
    Textmesh12.lookAt(vector);
    scene.add(Textmesh12);


    const TextMaterial18 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh18 = new THREE.Mesh(Textgeometry18, TextMaterial18);
    const theta18 = 150 * (Math.PI / 180);
    const phi18 = 60 * (Math.PI / 180);
    Textgeometry18.center();
    const sphericalPos18 = new THREE.Spherical(r, phi18, theta18);
    Textmesh18.position.setFromSpherical(sphericalPos18);
    container.add(Textmesh18);
    Textmesh18.rotation.set(50, 50, 0);
    vector.copy(Textmesh18.position).multiplyScalar(2);
    Textmesh18.lookAt(vector);
    scene.add(Textmesh18);

    const TextMaterial18A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh18A = new THREE.Mesh(Textgeometry18A, TextMaterial18A);
    const theta18A = 173 * (Math.PI / 180);
    const phi18A = 60 * (Math.PI / 180);
    Textgeometry18A.center();
    const sphericalPos18A = new THREE.Spherical(r, phi18A, theta18A);
    Textmesh18A.position.setFromSpherical(sphericalPos18A);
    container.add(Textmesh18A);
    Textmesh18A.rotation.set(50, 50, 0);
    vector.copy(Textmesh18A.position).multiplyScalar(2);
    Textmesh18A.lookAt(vector);
    scene.add(Textmesh18A);

    const Textgeometry13 = new TextGeometry('ティコ', {
        font: font,
        size: 70,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const TextMaterial13 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh13 = new THREE.Mesh(Textgeometry13, TextMaterial13);
    const theta13 = 5 * (Math.PI / 180);
    const phi13 = 140 * (Math.PI / 180);
    Textgeometry13.center();
    const sphericalPos13 = new THREE.Spherical(r, phi13, theta13);
    Textmesh13.position.setFromSpherical(sphericalPos13);
    container.add(Textmesh13);
    Textmesh13.rotation.set(50, 50, 0);
    vector.copy(Textmesh13.position).multiplyScalar(2);
    Textmesh13.lookAt(vector);
    scene.add(Textmesh13);

    const Textgeometry14 = new TextGeometry('ケプラー', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const TextMaterial14 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh14 = new THREE.Mesh(Textgeometry14, TextMaterial14);
    const theta14 = -20 * (Math.PI / 180);
    const phi14 = 90 * (Math.PI / 180);
    Textgeometry14.center();
    const sphericalPos14 = new THREE.Spherical(r, phi14, theta14);
    Textmesh14.position.setFromSpherical(sphericalPos14);
    container.add(Textmesh14);
    Textmesh14.rotation.set(50, 50, 0);
    vector.copy(Textmesh14.position).multiplyScalar(2);
    Textmesh14.lookAt(vector);
    scene.add(Textmesh14);


    const Textgeometry15 = new TextGeometry('アリスタルコス', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const TextMaterial15 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh15 = new THREE.Mesh(Textgeometry15, TextMaterial15);
    const theta15 = -40 * (Math.PI / 180);
    const phi15 = 80 * (Math.PI / 180);
    Textgeometry15.center();
    const sphericalPos15 = new THREE.Spherical(r, phi15, theta15);
    Textmesh15.position.setFromSpherical(sphericalPos15);
    container.add(Textmesh15);
    Textmesh15.rotation.set(50, 50, 0);
    vector.copy(Textmesh15.position).multiplyScalar(2);
    Textmesh15.lookAt(vector);
    scene.add(Textmesh15);

    const Textgeometry16 = new TextGeometry('コペルニクス', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const TextMaterial16 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh16 = new THREE.Mesh(Textgeometry16, TextMaterial16);
    const theta16 = -10 * (Math.PI / 180);
    const phi16 = 95 * (Math.PI / 180);
    Textgeometry16.center();
    const sphericalPos16 = new THREE.Spherical(r, phi16, theta16);
    Textmesh16.position.setFromSpherical(sphericalPos16);
    container.add(Textmesh16);
    Textmesh16.rotation.set(50, 50, 0);
    vector.copy(Textmesh16.position).multiplyScalar(2);
    Textmesh16.lookAt(vector);
    scene.add(Textmesh16);


    const Textgeometry17 = new TextGeometry('プラトン', {
        font: font,
        size: 70,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const TextMaterial17 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh17 = new THREE.Mesh(Textgeometry17, TextMaterial17);
    const theta17 = -20 * (Math.PI / 180);
    const phi17 = 60 * (Math.PI / 180);
    Textgeometry17.center();
    const sphericalPos17 = new THREE.Spherical(r, phi17, theta17);
    Textmesh17.position.setFromSpherical(sphericalPos17);
    container.add(Textmesh17);

    vector.copy(Textmesh17.position).multiplyScalar(2);
    Textmesh17.lookAt(vector);
    scene.add(Textmesh17);

    const Textgeometry19 = new TextGeometry('ダイ', {
        font: font,
        size: 60,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry19A = new TextGeometry('ダロス', {
        font: font,
        size: 60,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const TextMaterial19 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh19 = new THREE.Mesh(Textgeometry19, TextMaterial19);
    const theta19 = 180 * (Math.PI / 180);
    const phi19 = 80 * (Math.PI / 180);
    Textgeometry19.center();
    const sphericalPos19 = new THREE.Spherical(r, phi19, theta19);
    Textmesh19.position.setFromSpherical(sphericalPos19);
    container.add(Textmesh19);
    vector.copy(Textmesh19.position).multiplyScalar(2);
    Textmesh19.lookAt(vector);
    scene.add(Textmesh19);

    const TextMaterial19A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh19A = new THREE.Mesh(Textgeometry19A, TextMaterial19A);
    const theta19A = 192 * (Math.PI / 180);
    const phi19A = 80 * (Math.PI / 180);
    Textgeometry19A.center();
    const sphericalPos19A = new THREE.Spherical(r, phi19A, theta19A);
    Textmesh19A.position.setFromSpherical(sphericalPos19A);
    container.add(Textmesh19A);
    vector.copy(Textmesh19A.position).multiplyScalar(2);
    Textmesh19A.lookAt(vector);
    scene.add(Textmesh19A);





    const Textgeometry20 = new TextGeometry('ヘルツシュ', {
        font: font,
        size: 60,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry20A = new TextGeometry('プルング', {
        font: font,
        size: 60,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const TextMaterial20 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh20 = new THREE.Mesh(Textgeometry20, TextMaterial20);
    const theta20 = -120 * (Math.PI / 180);
    const phi20 = 100 * (Math.PI / 180);
    Textgeometry20.center();
    const sphericalPos20 = new THREE.Spherical(r, phi20, theta20);
    Textmesh20.position.setFromSpherical(sphericalPos20);
    container.add(Textmesh20);
    vector.copy(Textmesh20.position).multiplyScalar(2);
    Textmesh20.lookAt(vector);
    scene.add(Textmesh20);

    const TextMaterial20A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh20A = new THREE.Mesh(Textgeometry20A, TextMaterial20A);
    const theta20A = -97 * (Math.PI / 180);
    const phi20A = 100 * (Math.PI / 180);
    Textgeometry20A.center();
    const sphericalPos20A = new THREE.Spherical(r, phi20A, theta20A);
    Textmesh20A.position.setFromSpherical(sphericalPos20A);
    container.add(Textmesh20A);
    vector.copy(Textmesh20A.position).multiplyScalar(2);
    Textmesh20A.lookAt(vector);
    scene.add(Textmesh20A);






    const Textgeometry21 = new TextGeometry('ツィオル', {
        font: font,
        size: 60,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry21A = new TextGeometry('コフスキー', {
        font: font,
        size: 60,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry22 = new TextGeometry('アポロ', {
        font: font,

        size: 40,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry22A = new TextGeometry('グリソム・ホワイト', {
        font: font,

        size: 40,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry23 = new TextGeometry('メンデレ', {
        font: font,
        size: 60,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry23A = new TextGeometry('ーエフ', {
        font: font,
        size: 60,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry24 = new TextGeometry('南の海', {
        font: font,
        size: 60,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry25 = new TextGeometry('賢者の海', {
        font: font,
        size: 60,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry26 = new TextGeometry('シコルスキー', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry27 = new TextGeometry('フレドリッヒ・', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry27A = new TextGeometry('シャロノフ', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry28 = new TextGeometry('ディリクレ', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry28A = new TextGeometry('・ジャクソン', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry29 = new TextGeometry('アベニン', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry29A = new TextGeometry('山脈', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry30 = new TextGeometry('虹の入江', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry31 = new TextGeometry('中央の入江', {
        font: font,
        size: 70,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry32 = new TextGeometry('南極', {
        font: font,
        size: 70,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry32A = new TextGeometry('エイト', {
        font: font,
        size: 70,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry32B = new TextGeometry('ケン', {
        font: font,
        size: 70,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry32C = new TextGeometry('盆地', {
        font: font,
        size: 70,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry33 = new TextGeometry('コンプトン', {
        font: font,
        size: 40,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry34 = new TextGeometry('ロモノソフ・', {
        font: font,
        size: 40,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry34A = new TextGeometry('フレミング', {
        font: font,
        size: 40,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry35 = new TextGeometry('プランク', {
        font: font,
        size: 40,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry36 = new TextGeometry('ポアンカレ', {
        font: font,
        size: 40,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry37 = new TextGeometry('コロリョフ', {
        font: font,
        size: 110,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry38 = new TextGeometry('バーコフ', {
        font: font,
        size: 40,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry39 = new TextGeometry('クーロン・サートン', {
        font: font,
        size: 30,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry40 = new TextGeometry('ローレンツ', {
        font: font,
        size: 30,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry41 = new TextGeometry('メンデル・', {
        font: font,
        size: 30,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry41A = new TextGeometry('リュードベリ', {
        font: font,
        size: 30,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });
    const Textgeometry42 = new TextGeometry('キーラー・ヘ', {
        font: font,
        size: 30,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry42A = new TextGeometry('ヴィサイド', {
        font: font,
        size: 30,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry43 = new TextGeometry('プトレマイオス', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });

    const Textgeometry44 = new TextGeometry('シッカート', {
        font: font,
        size: 50,
        height: 1,
        curveSegments: 3,
        bevelEnabled: true,
        bevelThickness: 2,
        bevelSize: 3,
        bevelOffset: 0,
        bevelSegments: 2
    });



    const TextMaterial21 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh21 = new THREE.Mesh(Textgeometry21, TextMaterial21);
    const theta21 = 150 * (Math.PI / 180);
    const phi21 = 100 * (Math.PI / 180);
    Textgeometry21.center();
    const sphericalPos21 = new THREE.Spherical(r, phi21, theta21);
    Textmesh21.position.setFromSpherical(sphericalPos21);
    container.add(Textmesh21);
    vector.copy(Textmesh21.position).multiplyScalar(2);
    Textmesh21.lookAt(vector);
    scene.add(Textmesh21);

    const TextMaterial21A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh21A = new THREE.Mesh(Textgeometry21A, TextMaterial21A);
    const theta21A = 172 * (Math.PI / 180);
    const phi21A = 100 * (Math.PI / 180);
    Textgeometry21A.center();
    const sphericalPos21A = new THREE.Spherical(r, phi21A, theta21A);
    Textmesh21A.position.setFromSpherical(sphericalPos21A);
    container.add(Textmesh21A);
    vector.copy(Textmesh21A.position).multiplyScalar(2);
    Textmesh21A.lookAt(vector);
    scene.add(Textmesh21A);

    const TextMaterial22 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh22 = new THREE.Mesh(Textgeometry22, TextMaterial22);
    const theta22 = -150 * (Math.PI / 180);
    const phi22 = 115 * (Math.PI / 180);
    Textgeometry22.center();
    const sphericalPos22 = new THREE.Spherical(r, phi22, theta22);
    Textmesh22.position.setFromSpherical(sphericalPos22);
    container.add(Textmesh22);
    vector.copy(Textmesh22.position).multiplyScalar(2);
    Textmesh22.lookAt(vector);
    scene.add(Textmesh22);

    const TextMaterial22A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh22A = new THREE.Mesh(Textgeometry22A, TextMaterial22A);
    const theta22A = -150 * (Math.PI / 180);
    const phi22A = 120 * (Math.PI / 180);
    Textgeometry22A.center();
    const sphericalPos22A = new THREE.Spherical(r, phi22A, theta22A);
    Textmesh22A.position.setFromSpherical(sphericalPos22A);
    container.add(Textmesh22A);
    vector.copy(Textmesh22A.position).multiplyScalar(2);
    Textmesh22A.lookAt(vector);
    scene.add(Textmesh22A);

    const TextMaterial23 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh23 = new THREE.Mesh(Textgeometry23, TextMaterial23);
    const theta23 = 140 * (Math.PI / 180);
    const phi23 = 85 * (Math.PI / 180);
    Textgeometry23.center();
    const sphericalPos23 = new THREE.Spherical(r, phi23, theta23);
    Textmesh23.position.setFromSpherical(sphericalPos23);
    container.add(Textmesh23);
    vector.copy(Textmesh23.position).multiplyScalar(2);
    Textmesh23.lookAt(vector);
    scene.add(Textmesh23);

    const TextMaterial23A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh23A = new THREE.Mesh(Textgeometry23A, TextMaterial23A);
    const theta23A = 157 * (Math.PI / 180);
    const phi23A = 85 * (Math.PI / 180);
    Textgeometry23A.center();
    const sphericalPos23A = new THREE.Spherical(r, phi23A, theta23A);
    Textmesh23A.position.setFromSpherical(sphericalPos23A);
    container.add(Textmesh23A);
    vector.copy(Textmesh23A.position).multiplyScalar(2);
    Textmesh23A.lookAt(vector);
    scene.add(Textmesh23A);

    const TextMaterial24 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh24 = new THREE.Mesh(Textgeometry24, TextMaterial24);
    const theta24 = 120 * (Math.PI / 180);
    const phi24 = 130 * (Math.PI / 180);
    Textgeometry24.center();
    const sphericalPos24 = new THREE.Spherical(r, phi24, theta24);
    Textmesh24.position.setFromSpherical(sphericalPos24);
    container.add(Textmesh24);
    vector.copy(Textmesh24.position).multiplyScalar(2);
    Textmesh24.lookAt(vector);
    scene.add(Textmesh24);

    const TextMaterial25 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh25 = new THREE.Mesh(Textgeometry25, TextMaterial25);
    const theta25 = 170 * (Math.PI / 180);
    const phi25 = 110 * (Math.PI / 180);
    Textgeometry25.center();
    const sphericalPos25 = new THREE.Spherical(r, phi25, theta25);
    Textmesh25.position.setFromSpherical(sphericalPos25);
    container.add(Textmesh25);
    vector.copy(Textmesh25.position).multiplyScalar(2);
    Textmesh25.lookAt(vector);
    scene.add(Textmesh25);

    const TextMaterial26 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh26 = new THREE.Mesh(Textgeometry26, TextMaterial26);
    const theta26 = 170 * (Math.PI / 180);
    const phi26 = 150 * (Math.PI / 180);
    Textgeometry26.center();
    const sphericalPos26 = new THREE.Spherical(r, phi26, theta26);
    Textmesh26.position.setFromSpherical(sphericalPos26);
    container.add(Textmesh26);
    vector.copy(Textmesh26.position).multiplyScalar(2);
    Textmesh26.lookAt(vector);
    scene.add(Textmesh26);

    const TextMaterial27 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh27 = new THREE.Mesh(Textgeometry27, TextMaterial27);
    const theta27 = -170 * (Math.PI / 180);
    const phi27 = 70 * (Math.PI / 180);
    Textgeometry27.center();
    const sphericalPos27 = new THREE.Spherical(r, phi27, theta27);
    Textmesh27.position.setFromSpherical(sphericalPos27);
    container.add(Textmesh27);
    vector.copy(Textmesh27.position).multiplyScalar(2);
    Textmesh27.lookAt(vector);
    scene.add(Textmesh27);
    const TextMaterial27A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh27A = new THREE.Mesh(Textgeometry27A, TextMaterial27A);
    const theta27A = -145 * (Math.PI / 180);
    const phi27A = 70 * (Math.PI / 180);
    Textgeometry27A.center();
    const sphericalPos27A = new THREE.Spherical(r, phi27A, theta27A);
    Textmesh27A.position.setFromSpherical(sphericalPos27A);
    container.add(Textmesh27A);
    vector.copy(Textmesh27A.position).multiplyScalar(2);
    Textmesh27A.lookAt(vector);
    scene.add(Textmesh27A);

    const TextMaterial28 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh28 = new THREE.Mesh(Textgeometry28, TextMaterial28);
    const theta28 = -140 * (Math.PI / 180);
    const phi28 = 80 * (Math.PI / 180);
    Textgeometry28.center();
    const sphericalPos28 = new THREE.Spherical(r, phi28, theta28);
    Textmesh28.position.setFromSpherical(sphericalPos28);
    container.add(Textmesh28);
    vector.copy(Textmesh28.position).multiplyScalar(2);
    Textmesh28.lookAt(vector);
    scene.add(Textmesh28);
    const TextMaterial28A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh28A = new THREE.Mesh(Textgeometry28A, TextMaterial28A);
    const theta28A = -115 * (Math.PI / 180);
    const phi28A = 80 * (Math.PI / 180);
    Textgeometry28A.center();
    const sphericalPos28A = new THREE.Spherical(r, phi28A, theta28A);
    Textmesh28A.position.setFromSpherical(sphericalPos28A);
    container.add(Textmesh28A);
    vector.copy(Textmesh28A.position).multiplyScalar(2);
    Textmesh28A.lookAt(vector);
    scene.add(Textmesh28A);

    const TextMaterial29 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh29 = new THREE.Mesh(Textgeometry29, TextMaterial29);
    const theta29 = -15 * (Math.PI / 180);
    const phi29 = 70 * (Math.PI / 180);
    Textgeometry29.center();
    const sphericalPos29 = new THREE.Spherical(r, phi29, theta29);
    Textmesh29.position.setFromSpherical(sphericalPos29);
    container.add(Textmesh29);
    vector.copy(Textmesh29.position).multiplyScalar(2);
    Textmesh29.lookAt(vector);
    scene.add(Textmesh29);
    const TextMaterial29A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh29A = new THREE.Mesh(Textgeometry29A, TextMaterial29A);
    const theta29A = -2 * (Math.PI / 180);
    const phi29A = 70 * (Math.PI / 180);
    Textgeometry29A.center();
    const sphericalPos29A = new THREE.Spherical(r, phi29A, theta29A);
    Textmesh29A.position.setFromSpherical(sphericalPos29A);
    container.add(Textmesh29A);
    vector.copy(Textmesh29A.position).multiplyScalar(2);
    Textmesh29A.lookAt(vector);
    scene.add(Textmesh29A);

    const TextMaterial30 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh30 = new THREE.Mesh(Textgeometry30, TextMaterial30);
    const theta30 = -30 * (Math.PI / 180);
    const phi30 = 50 * (Math.PI / 180);
    Textgeometry30.center();
    const sphericalPos30 = new THREE.Spherical(r, phi30, theta30);
    Textmesh30.position.setFromSpherical(sphericalPos30);
    container.add(Textmesh30);
    vector.copy(Textmesh30.position).multiplyScalar(2);
    Textmesh30.lookAt(vector);
    scene.add(Textmesh30);

    const TextMaterial31 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh31 = new THREE.Mesh(Textgeometry31, TextMaterial31);
    const theta31 = 10 * (Math.PI / 180);
    const phi31 = 100 * (Math.PI / 180);
    Textgeometry31.center();
    const sphericalPos31 = new THREE.Spherical(r, phi31, theta31);
    Textmesh31.position.setFromSpherical(sphericalPos31);
    container.add(Textmesh31);
    vector.copy(Textmesh31.position).multiplyScalar(2);
    Textmesh31.lookAt(vector);
    scene.add(Textmesh31);


    const TextMaterial32 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh32 = new THREE.Mesh(Textgeometry32, TextMaterial32);
    const theta32 = -130 * (Math.PI / 180);
    const phi32 = 140 * (Math.PI / 180);
    Textgeometry32.center();
    const sphericalPos32 = new THREE.Spherical(r, phi32, theta32);
    Textmesh32.position.setFromSpherical(sphericalPos32);
    container.add(Textmesh32);
    vector.copy(Textmesh32.position).multiplyScalar(2);
    Textmesh32.lookAt(vector);
    scene.add(Textmesh32);

    const TextMaterial32A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh32A = new THREE.Mesh(Textgeometry32A, TextMaterial32A);
    const theta32A = -108 * (Math.PI / 180);
    const phi32A = 140 * (Math.PI / 180);
    Textgeometry32A.center();
    const sphericalPos32A = new THREE.Spherical(r, phi32A, theta32A);
    Textmesh32A.position.setFromSpherical(sphericalPos32A);
    container.add(Textmesh32A);
    vector.copy(Textmesh32A.position).multiplyScalar(2);
    Textmesh32A.lookAt(vector);
    scene.add(Textmesh32A);

    const TextMaterial32B = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh32B = new THREE.Mesh(Textgeometry32B, TextMaterial32B);
    const theta32B = -85 * (Math.PI / 180);
    const phi32B = 140 * (Math.PI / 180);
    Textgeometry32B.center();
    const sphericalPos32B = new THREE.Spherical(r, phi32B, theta32B);
    Textmesh32B.position.setFromSpherical(sphericalPos32B);
    container.add(Textmesh32B);
    vector.copy(Textmesh32B.position).multiplyScalar(2);
    Textmesh32B.lookAt(vector);
    scene.add(Textmesh32B);

    const TextMaterial32C = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh32C = new THREE.Mesh(Textgeometry32C, TextMaterial32C);
    const theta32C = -68 * (Math.PI / 180);
    const phi32C = 140 * (Math.PI / 180);
    Textgeometry32C.center();
    const sphericalPos32C = new THREE.Spherical(r, phi32C, theta32C);
    Textmesh32C.position.setFromSpherical(sphericalPos32C);
    container.add(Textmesh32C);
    vector.copy(Textmesh32C.position).multiplyScalar(2);
    Textmesh32C.lookAt(vector);
    scene.add(Textmesh32C);

    const TextMaterial33 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh33 = new THREE.Mesh(Textgeometry33, TextMaterial33);
    const theta33 = 130 * (Math.PI / 180);
    const phi33 = 40 * (Math.PI / 180);
    Textgeometry33.center();
    const sphericalPos33 = new THREE.Spherical(r, phi33, theta33);
    Textmesh33.position.setFromSpherical(sphericalPos33);
    container.add(Textmesh33);
    vector.copy(Textmesh33.position).multiplyScalar(2);
    Textmesh33.lookAt(vector);
    scene.add(Textmesh33);

    const TextMaterial34 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh34 = new THREE.Mesh(Textgeometry34, TextMaterial34);
    const theta34 = 120 * (Math.PI / 180);
    const phi34 = 80 * (Math.PI / 180);
    Textgeometry34.center();
    const sphericalPos34 = new THREE.Spherical(r, phi34, theta34);
    Textmesh34.position.setFromSpherical(sphericalPos34);
    container.add(Textmesh34);
    vector.copy(Textmesh34.position).multiplyScalar(2);
    Textmesh34.lookAt(vector);
    scene.add(Textmesh34);

    const TextMaterial34A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh34A = new THREE.Mesh(Textgeometry34A, TextMaterial34A);
    const theta34A = 140 * (Math.PI / 180);
    const phi34A = 80 * (Math.PI / 180);
    Textgeometry34A.center();
    const sphericalPos34A = new THREE.Spherical(r, phi34A, theta34A);
    Textmesh34A.position.setFromSpherical(sphericalPos34A);
    container.add(Textmesh34A);
    vector.copy(Textmesh34A.position).multiplyScalar(2);
    Textmesh34A.lookAt(vector);
    scene.add(Textmesh34A);

    const TextMaterial35 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh35 = new THREE.Mesh(Textgeometry35, TextMaterial35);
    const theta35 = 150 * (Math.PI / 180);
    const phi35 = 140 * (Math.PI / 180);
    Textgeometry35.center();
    const sphericalPos35 = new THREE.Spherical(r, phi35, theta35);
    Textmesh35.position.setFromSpherical(sphericalPos35);
    container.add(Textmesh35);
    vector.copy(Textmesh35.position).multiplyScalar(2);
    Textmesh35.lookAt(vector);
    scene.add(Textmesh35);

    const TextMaterial36 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh36 = new THREE.Mesh(Textgeometry36, TextMaterial36);
    const theta36 = 170 * (Math.PI / 180);
    const phi36 = 145 * (Math.PI / 180);
    Textgeometry36.center();
    const sphericalPos36 = new THREE.Spherical(r, phi36, theta36);
    Textmesh36.position.setFromSpherical(sphericalPos36);
    container.add(Textmesh36);
    vector.copy(Textmesh36.position).multiplyScalar(2);
    Textmesh36.lookAt(vector);
    scene.add(Textmesh36);

    const TextMaterial37 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh37 = new THREE.Mesh(Textgeometry37, TextMaterial37);
    const theta37 = -150 * (Math.PI / 180);
    const phi37 = 90 * (Math.PI / 180);
    Textgeometry37.center();
    const sphericalPos37 = new THREE.Spherical(r, phi37, theta37);
    Textmesh37.position.setFromSpherical(sphericalPos37);
    container.add(Textmesh37);
    vector.copy(Textmesh37.position).multiplyScalar(2);
    Textmesh37.lookAt(vector);
    scene.add(Textmesh37);

    const TextMaterial38 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh38 = new THREE.Mesh(Textgeometry38, TextMaterial38);
    const theta38 = -150 * (Math.PI / 180);
    const phi38 = 40 * (Math.PI / 180);
    Textgeometry38.center();
    const sphericalPos38 = new THREE.Spherical(r, phi38, theta38);
    Textmesh38.position.setFromSpherical(sphericalPos38);
    container.add(Textmesh38);
    vector.copy(Textmesh38.position).multiplyScalar(2);
    Textmesh38.lookAt(vector);
    scene.add(Textmesh38);

    const TextMaterial39 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh39 = new THREE.Mesh(Textgeometry39, TextMaterial39);
    const theta39 = -140 * (Math.PI / 180);
    const phi39 = 50 * (Math.PI / 180);
    Textgeometry39.center();
    const sphericalPos39 = new THREE.Spherical(r, phi39, theta39);
    Textmesh39.position.setFromSpherical(sphericalPos39);
    container.add(Textmesh39);
    vector.copy(Textmesh39.position).multiplyScalar(2);
    Textmesh39.lookAt(vector);
    scene.add(Textmesh39);


    const TextMaterial40 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh40 = new THREE.Mesh(Textgeometry40, TextMaterial40);
    const theta40 = -130 * (Math.PI / 180);
    const phi40 = 60 * (Math.PI / 180);
    Textgeometry40.center();
    const sphericalPos40 = new THREE.Spherical(r, phi40, theta40);
    Textmesh40.position.setFromSpherical(sphericalPos40);
    container.add(Textmesh40);
    vector.copy(Textmesh40.position).multiplyScalar(2);
    Textmesh40.lookAt(vector);
    scene.add(Textmesh40);

    const TextMaterial41 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh41 = new THREE.Mesh(Textgeometry41, TextMaterial41);
    const theta41 = -130 * (Math.PI / 180);
    const phi41 = 130 * (Math.PI / 180);
    Textgeometry41.center();
    const sphericalPos41 = new THREE.Spherical(r, phi41, theta41);
    Textmesh41.position.setFromSpherical(sphericalPos41);
    container.add(Textmesh41);
    vector.copy(Textmesh41.position).multiplyScalar(2);
    Textmesh41.lookAt(vector);
    scene.add(Textmesh41);

    const TextMaterial41A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh41A = new THREE.Mesh(Textgeometry41A, TextMaterial41A);
    const theta41A = -113 * (Math.PI / 180);
    const phi41A = 130 * (Math.PI / 180);
    Textgeometry41A.center();
    const sphericalPos41A = new THREE.Spherical(r, phi41A, theta41A);
    Textmesh41A.position.setFromSpherical(sphericalPos41A);
    container.add(Textmesh41A);
    vector.copy(Textmesh41A.position).multiplyScalar(2);
    Textmesh41A.lookAt(vector);
    scene.add(Textmesh41A);

    const TextMaterial42 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh42 = new THREE.Mesh(Textgeometry42, TextMaterial42);
    const theta42 = 170 * (Math.PI / 180);
    const phi42 = 90 * (Math.PI / 180);
    Textgeometry42.center();
    const sphericalPos42 = new THREE.Spherical(r, phi42, theta42);
    Textmesh42.position.setFromSpherical(sphericalPos42);
    container.add(Textmesh42);
    vector.copy(Textmesh42.position).multiplyScalar(2);
    Textmesh42.lookAt(vector);
    scene.add(Textmesh42);

    const TextMaterial42A = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh42A = new THREE.Mesh(Textgeometry42A, TextMaterial42A);
    const theta42A = 183 * (Math.PI / 180);
    const phi42A = 90 * (Math.PI / 180);
    Textgeometry42A.center();
    const sphericalPos42A = new THREE.Spherical(r, phi42A, theta42A);
    Textmesh42A.position.setFromSpherical(sphericalPos42A);
    container.add(Textmesh42A);
    vector.copy(Textmesh42A.position).multiplyScalar(2);
    Textmesh42A.lookAt(vector);
    scene.add(Textmesh42A);

    const TextMaterial43 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh43 = new THREE.Mesh(Textgeometry43, TextMaterial43);
    const theta43 = 0 * (Math.PI / 180);
    const phi43 = 110 * (Math.PI / 180);
    Textgeometry43.center();
    const sphericalPos43 = new THREE.Spherical(r, phi43, theta43);
    Textmesh43.position.setFromSpherical(sphericalPos43);
    container.add(Textmesh43);
    vector.copy(Textmesh43.position).multiplyScalar(2);
    Textmesh43.lookAt(vector);
    scene.add(Textmesh43);

    const TextMaterial44 = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const Textmesh44 = new THREE.Mesh(Textgeometry44, TextMaterial44);
    const theta44 = -50 * (Math.PI / 180);
    const phi44 = 150 * (Math.PI / 180);
    Textgeometry44.center();
    const sphericalPos44 = new THREE.Spherical(r, phi44, theta44);
    Textmesh44.position.setFromSpherical(sphericalPos44);
    container.add(Textmesh44);
    vector.copy(Textmesh44.position).multiplyScalar(2);
    Textmesh44.lookAt(vector);
    scene.add(Textmesh44);


});
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x00ffff, 0, 5000);

// サイズを指定
const width = window.innerWidth;
const height = window.innerHeight;
let rot = 0;

class Spheres extends THREE.Mesh {
    constructor() {
        const geometry = new THREE.SphereGeometry(1000, 30, 30);
        const material = new THREE.MeshBasicMaterial({ wireframe: true, transparent: true, opacity: 0.1, fog: true }); {
        }
        super(geometry, material);
    }
}

// レンダラーを作成
const canvasElement = document.querySelector("#myCanvas");
const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
});
renderer.setSize(width, height);


// カメラを作成
const camera = new THREE.PerspectiveCamera(80, width / height, 1, 3500);

function initCameraPosition() {
    // カメラの初期座標を設定
    camera.position.set(0, 0, 4700);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
}
initCameraPosition();

const AmbientLight = new THREE.AmbientLight(0xffffff, 1.0);
scene.add(AmbientLight);

const mesh = new Spheres();
scene.add(mesh);

// カメラコントローラーを作成
const controls = new OrbitControls(camera, canvasElement);
//カメラをゆっくりと集会させる
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

const canvas = document.querySelector('#myCanvas');
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

    // レイキャスト = マウス位置からまっすぐに伸びる光線ベクトルを生成
    raycaster.setFromCamera(mouse, camera);

    // その光線とぶつかったオブジェクトを得る
    const objectsToIntersect = scene.children.filter(obj => obj !== mesh);
    const intersects = raycaster.intersectObjects(objectsToIntersect);
    if (intersects.length > 0) {
        // ぶつかったオブジェクトに対してなんかする
        const cameraPosition = camera.position.clone();
        // カメラの位置の絶対値を取得
        const x = Math.abs(cameraPosition.x);
        const y = Math.abs(cameraPosition.y);
        const z = Math.abs(cameraPosition.z);
        //明度を計算


    }
    controls.update(); // カメラコントローラーの更新
}
