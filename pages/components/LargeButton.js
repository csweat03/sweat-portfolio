export default function LargeButton(props) {
    return (
        <div style={{
            float: "left",
          }}>
            <a href={props.link}>
                <button style={{
                    "borderRadius": "20px",
                    "boxShadow": "#0070f3 0px 0px 10px 1px",
                    color: "#FFFFFF",
                    cursor: "pointer",
                    "fontFamily": "Inter,Helvetica,\"Apple Color Emoji\",\"Segoe UI Emoji\",NotoColorEmoji,\"Noto Color Emoji\",\"Segoe UI Symbol\",\"Android Emoji\",EmojiSymbols,-apple-system,system-ui,\"Segoe UI\",Roboto,\"Helvetica Neue\",\"Noto Sans\",sans-serif",
                    "fontSize": (((props.scale+1)*16)/16)+"px",
                    "fontWeight": "700",
                    "textShadow": "1px 1px #0070f3",
                    opacity: "0.9",
                    outline: "0 solid transparent",
                    border: "0",
                    height: (props.scale*33.3)+"px",
                    width: (props.scale*77.7)+"px",
                    margin: "10px"
                }} role="button">{props.text}</button>
            </a>
        </div>
    );
  }

