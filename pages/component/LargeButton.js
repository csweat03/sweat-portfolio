export default function LargeButton(props) {
    return (
        <div style={{
            position: "relative",
            left: props.x+"px",
            top: props.y+"px",
          }}>
            <a href={props.link}>
                <button style={{
                    background: "#0070f3",
                    "border-radius": "20px",
                    "box-shadow": "#0070f3 0 10px 20px -10px",
                    color: "#FFFFFF",
                    cursor: "pointer",
                    "font-family": "Inter,Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",NotoColorEmoji,\"Noto Color Emoji\",\"Segoe UI Symbol\",\"Android Emoji\",EmojiSymbols,-apple-system,system-ui,\"Segoe UI\",Roboto,\"Helvetica Neue\",\"Noto Sans\",sans-serif",
                    "font-size": (((props.scale+1)*16)/12)+"px",
                    "font-weight": "700",
                    opacity: "1",
                    outline: "0 solid transparent",
                    padding: "8px 18px",
                    "touch-action": "manipulation",
                    border: "0",
                    padding: (props.scale*8)+"px "+(props.scale*18)+"px",
                }} role="button" href>{props.text}</button>
            </a>
        </div>
    );
  }

