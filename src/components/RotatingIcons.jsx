import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/examples/jsm/renderers/CSS3DRenderer";
import { FaReact, FaNodeJs, FaJs, FaPython, FaHtml5 } from "react-icons/fa";

const icons = [
  { icon: FaReact, name: "React" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaJs, name: "JavaScript" },
  { icon: FaPython, name: "Python" },
  { icon: FaHtml5, name: "HTML5" },
];

const SkillSphere = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 6; // Move the camera back slightly

    const renderer = new CSS3DRenderer();
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const radius = 2;

    icons.forEach((icon, index) => {
      const element = document.createElement("div");
      element.className = "icon";
      element.style.width = "24px";
      element.style.height = "24px";
      element.style.display = "flex";
      element.style.alignItems = "center";
      element.style.justifyContent = "center";
      element.style.color = "#ffffff";
      element.style.fontSize = "16px"; // Smaller font size
      element.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      element.style.borderRadius = "50%";

      const IconComponent = icon.icon;
      const iconNode = document.createElement("div");
      iconNode.innerHTML = React.createElement(IconComponent, {
        size: 16,
      }).props.children;
      element.appendChild(iconNode);

      const cssObject = new CSS3DObject(element);

      const phi = Math.acos(-1 + (2 * index) / icons.length);
      const theta = Math.sqrt(icons.length * Math.PI) * phi;

      cssObject.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );

      cssObject.lookAt(camera.position); // Ensure the icon faces the camera
      scene.add(cssObject);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      scene.rotation.y += 0.002; // Adjust rotation speed if needed
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "400px",
        position: "relative",
        overflow: "hidden",
      }}
    />
  );
};

export default SkillSphere;
