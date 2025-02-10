import { Card } from "antd";
import imagenFondo from "../../assets/bg_panel1.jpg"; // Ajusta la ruta

const ImageOverlay = () => {
  return (
    <Card style={{ width:"100%", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "10erm",
          backgroundImage: `url(${imagenFondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Capa de oscurecimiento */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Ajusta el nivel de opacidad
          }}
        ></div>

        {/* Contenido encima de la imagen */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Texto sobre la imagen
        </div>
      </div>
    </Card>
  );
};

export default ImageOverlay;
