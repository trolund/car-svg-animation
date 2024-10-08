import React from 'react';
import styles from './car.module.css';

interface CarProp {
    style?: React.CSSProperties;
    moveY?: boolean;
    moveBody?: boolean;
    moveWheels?: boolean;
    clouds?: boolean;
}

const Car: React.FC<CarProp> = ({ style, moveBody, moveWheels, moveY, clouds }: CarProp) => {
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 250" style={style} className={`${styles.root} ${moveY && styles.car || ""}`}>
            <g className={moveBody && styles.carbody || ""}>
                <g id="bottom">
                    <g id="bodybg" data-name="bodybg">
                        <path d="M504,257.52c0,12-12.67,17.2-22.28,22.29l-4.94,2.37c-3,1.29-6.08,2.84-9.3,3.28a2.58,2.58,0,0,1-2.85-2.94c8.52-61.81-88.06-62.89-80.85-.86a2.58,2.58,0,0,1-2.62,2.9c-23.75-.62-178.33-5.12-201.07-5.67a2.59,2.59,0,0,1-2.5-2.78c4.39-58.26-84.69-59.12-81.62-1A2.59,2.59,0,0,1,93,277.82c-11.12-1.59-21.78-5.9-32.72-8.55-2.1-.72-4.55-.78-5.82-3.07a75.22,75.22,0,0,1-4.53-14,44.21,44.21,0,0,1-.75-14.51,2.54,2.54,0,0,1,.94-1.67c1.52-1.23,3.29-2.25,3.42-4.58,3.3-14.22-5-31.93,7.39-43.5,2.06-1.75,4.26-3.29,6.3-5l4-3.21,7.13-5.79c6.52-4.87,13.3-9.57,20.18-13.79.87-.48,2.28-.79,1.69-2.21-.28-2.92-1.28-3.31-2.59-3.83a2.59,2.59,0,0,1,.5-4.95c14.57-2.65,29.8-4.05,44.81-5.53h0c3.75-.62,7.86,0,11.5-.9l.47-.07c61.93-2.67,148.62,7.3,152,8.84l.15.09c11.13,5.2,21.79,11.38,32.65,17.14,10.36,5.7,20.45,12.83,30.68,18.46a2.6,2.6,0,0,0,.62.25c6.39,1.72,13.43.42,19.95,1.29,13.88,1.93,29.26,2.87,43,7.08,25.17,6.07,52.19,16.8,68.78,35.89a2.62,2.62,0,0,1,.61,1.39c.06.48.18,1,.27,1.49h0a4.39,4.39,0,0,1-.08,2.25,7.19,7.19,0,0,0-.51,4,6.11,6.11,0,0,0,.31,1.06,7.05,7.05,0,0,1,.64,2.85c0,3.32.05,9.53,0,9.93-.81,0-.87.68-.3,1.7A2.57,2.57,0,0,1,504,257.52Z" transform="translate(-48.87 -70)" style={{ fill: "#d5dae2" }} />
                    </g>
                    <path d="M504,257.52c0,.38,0,.74,0,1.11C503.2,269.91,491,275,481.68,279.89l-4.94,2.37c-1.15.48-2.3,1-3.46,1.5a23.4,23.4,0,0,1-5.84,1.78,2.55,2.55,0,0,1-2.86-2.4,2,2,0,0,1,0-.54v0c.06-.42.11-.83.15-1.24.09-.74.16-1.48.22-2.2q.06-.74.09-1.44v-.05c0-.52.05-1,.05-1.56,1-52.71-80.17-54.09-81.72-2.31v.06c0,.23,0,.46,0,.7a49.15,49.15,0,0,0,.2,5.49c0,.55.1,1.12.17,1.69v0a2.69,2.69,0,0,1,0,.49,2.57,2.57,0,0,1-2.63,2.41l-6.16-.17c-34.17-.94-153.43-4.4-188.15-5.33l-6.76-.17a2.59,2.59,0,0,1-2.5-2.4,2.41,2.41,0,0,1,0-.38c0-.38.06-.76.07-1.13.06-1.08.09-2.13.09-3.17,0-.49,0-1,0-1.46,0-.64-.05-1.27-.09-1.89-3.46-48.42-77.87-48.86-81.6-.1,0,.05,0,.11,0,.16q-.06.81-.09,1.65v.07c0,.59,0,1.18,0,1.79,0,1,0,2,.08,3a2.64,2.64,0,0,1,0,.4A2.58,2.58,0,0,1,93,277.9q-2.73-.39-5.41-1s0-.06,0-.09c-9.19-2-18.14-5.34-27.29-7.56-2.1-.72-4.55-.78-5.82-3.07a85.52,85.52,0,0,1-3.19-8.75l35.84,8.8c1.79-24.65,23.63-44.12,50.3-44.12,27.6,0,50,20.83,50.43,46.67l185.77,4.72v0c0-26.18,22.58-47.41,50.43-47.41,27.59,0,50,20.81,50.43,46.64A157.71,157.71,0,0,0,504,257.52Z" transform="translate(-48.87 -70)" style={{ fill: "#1f344c" }} />
                    <path d="M177.62,275.06c0,.37,0,.75-.07,1.13v-.08C177.58,275.76,177.6,275.41,177.62,275.06Z" transform="translate(-48.87 -70)" style={{ fill: "#1f344c" }} />
                    <path d="M383.57,280c.05.54.11,1.09.17,1.64v0C383.67,281.14,383.61,280.57,383.57,280Z" transform="translate(-48.87 -70)" style={{ fill: "#1f344c" }} />
                    <path d="M464.74,281.33c0,.41-.09.82-.15,1.24v-.05C464.65,282.12,464.7,281.72,464.74,281.33Z" transform="translate(-48.87 -70)" style={{ fill: "#1f344c" }} />
                </g>
                <g id="windows">
                    <path d="M363.25,202.24,136.78,188.47s-9.35,1.31-14-5.48C151.64,127.63,328.53,147.16,363.25,202.24Z" transform="translate(-48.87 -70)" style={{ fill: "#314d77" }} />
                    <path d="M387.14,191.4c-1.87,3-9.95,5.74-13.1,4.22A113.84,113.84,0,0,1,358.35,187a457.7,457.7,0,0,0-41.24-26c-3.95-2.16-7.94-4.24-11.87-6.34.53-1.34,2-1.73,1.82-3.16h0l.15.07,9.13,4.52,23.27,12.55,22.49,13.39c2.8,1.83,5.41,4.45,8.48,5.23a26.37,26.37,0,0,0,7.38,1,38.92,38.92,0,0,1,8.07.36l.11,0C387.39,189.26,388,190,387.14,191.4Z" transform="translate(-48.87 -70)" style={{ fill: "#314d77" }} />
                </g>
                <g id="light">
                    <path d="M92,205.26,54.29,210c-.25-8.12.53-15.95,7.07-22.06,0,0,27.4,2.4,31.23,8.2S92,205.26,92,205.26Z" transform="translate(-48.87 -70)" style={{ fill: "#1f344c" }} />
                    <g id="Layer_11" data-name="Layer 11">
                        <path d="M456.44,212.22s20-.22,36.88,19C493.32,231.26,483.69,237.9,456.44,212.22Z" transform="translate(-48.87 -70)" style={{ fill: "#1f344c" }} />
                    </g>
                </g>
                <g id="shadow">
                    <path d="M503.56,234.54c-14.47,1.37-86.29,6.3-137.21-24.54l-243.6-11s-8.29-15-51.58-19.28l7.13-5.79c6.52-4.87,13.3-9.57,20.18-13.79.87-.48,2.28-.79,1.69-2.21-.28-2.92-1.28-3.31-2.59-3.83a2.59,2.59,0,0,1,.5-4.95c14.57-2.65,29.8-4.05,44.81-5.53h0c3.75-.62,7.86,0,11.5-.9l.47-.07c61.93-2.67,148.62,7.3,152,8.84l.15.09c11.13,5.2,21.79,11.38,32.65,17.14,10.36,5.7,20.45,12.83,30.68,18.46a2.6,2.6,0,0,0,.62.25c6.39,1.72,13.43.42,19.95,1.29,13.88,1.93,29.26,2.87,43,7.08,25.17,6.07,52.19,16.8,68.78,35.89a2.62,2.62,0,0,1,.61,1.39C503.35,233.53,503.47,234,503.56,234.54Z" transform="translate(-48.87 -70)" style={{ fill: "#314d77", opacity: 0.11 }} />

                    <g id="Layer_16" data-name="Layer 16">
                        <path d="M92,205.26s-1.45,20.33-23.7,26.15C54.56,235,50.85,235.92,50,236.09l-.2,0,.28-.1c1.52-1.23,3.29-2.25,3.42-4.58,2.15-9.27-.63-20,.61-29.59Z" transform="translate(-48.87 -70)" style={{ fill: "#314d77", opacity: 0.11 }} />
                    </g>
                </g>
                <g id="door">
                    <path d="M130.13,179.16c9.26-8.89,47.42-38.5,131.53-21.4a2,2,0,0,1,1.58,2l-1.35,29.91a2,2,0,0,1-2.06,1.88c-14.83-.67-108.93-5.07-128.73-9.06A2,2,0,0,1,130.13,179.16Z" transform="translate(-48.87 -70)" style={{ fill: "#1f344c" }} />
                    <path d="M267.49,162.11l-1.36,27.16a2.46,2.46,0,0,0,2.31,2.58l79.39,5.08a2.47,2.47,0,0,0,1.58-4.48c-13.16-9.24-44-28.36-79.18-32.67A2.46,2.46,0,0,0,267.49,162.11Z" transform="translate(-48.87 -70)" style={{ fill: "#1f344c", opacity: 0.43 }} />
                    <path d="M148,206.71v7.14a2.51,2.51,0,0,0,2.14,2.48c9,1.28,43.12,8.64,46.07,46.89a2.5,2.5,0,0,0,2.5,2.3H253.2a2.52,2.52,0,0,0,2.5-2.34l3.4-50.64a2.52,2.52,0,0,0-2.37-2.68l-106.06-5.65A2.5,2.5,0,0,0,148,206.71Z" transform="translate(-48.87 -70)" style={{ fill: "#1f344c", opacity: 0.04 }} />
                    <path d="M264.53,210l-3.62,55.52,103.91,2.64s2.3-21.92,11.84-29.37l-12.17-25Z" transform="translate(-48.87 -70)" style={{ fill: "#1f344c", opacity: 0.04 }} />
                </g>
                <g id="mirror">
                    <path d="M344.33,198.43c2.51,0,5-.08,7.51,0,1.9.08,2-.74,1.15-2-3.14-4.79-7.69-7.68-13.05-9.41a1.78,1.78,0,0,0-2.21.92,17.58,17.58,0,0,0-1.43,2.8c-2.43,6.55-2.25,6.82,4.58,7.22,1.15.07,2.3.19,3.46.28Z" transform="translate(-48.87 -70)" style={{ fill: "#efeeee" }} />
                </g>
            </g>

            <g id="wheels">
                <g className={moveWheels && styles.wheel || ""}>
                    <g transform="translate(0 72)" >
                        <circle cx="87.47" cy="130.5" r="38.39" style={{ fill: "#131b23" }} />
                        <circle cx="87.47" cy="130.5" r="29.62" style={{ fill: "#1f344c" }} />
                        <circle cx="87.48" cy="130.51" r="11.67" style={{ fill: "#314d77" }} />
                    </g>
                    <path d="M170.66,272.73a34.32,34.32,0,1,1-34.56-34.37A34.4,34.4,0,0,1,170.66,272.73ZM125,279.07c-.43-1.38-.47-2.7-1.15-3.43a26.44,26.44,0,0,0-5.48-4.78c-2.69-1.61-4.59-.29-4.6,2.9A18.45,18.45,0,0,0,118.52,286c1.49,1.75,3.43,1.53,4.36-.57S124.36,281.12,125,279.07Zm33.64-5c0-.19,0-.79-.14-1.37-.42-2.54-1.79-3.38-4.06-2.13a25.63,25.63,0,0,0-4.72,3.68,5.46,5.46,0,0,0-1.6,5.55,27.65,27.65,0,0,0,2,5.68c1,2.12,3,2.19,4.47.31A19.26,19.26,0,0,0,158.68,274.05Zm-35.29-10,0-.14a6.06,6.06,0,0,0,.74,0c1.9-.17,3.95,0,5.41-1.49a13,13,0,0,0,3.64-7.75c.27-2.31-.82-3.3-3.15-2.94a14.55,14.55,0,0,0-7.54,3.48,25.63,25.63,0,0,0-4.2,4.81c-.92,1.37-.25,2.73,1.35,3.26A32.89,32.89,0,0,0,123.39,264.07Zm13.12,31.52a63.45,63.45,0,0,0,6.72-1.67c1.78-.66,2.07-2,1-3.59-1.83-2.78-4.62-4.2-7.69-5.16a2.13,2.13,0,0,0-1.17.05,14.91,14.91,0,0,0-7.07,4.08c-1.72,1.92-1.57,3.4.83,4.34A61.47,61.47,0,0,0,136.51,295.59Zm14.08-31.24v0h1c3.66-.17,4.69-2.07,2.67-5.11a17.42,17.42,0,0,0-9.92-7.44,6.45,6.45,0,0,0-1.45-.23,1.93,1.93,0,0,0-2.26,2,12.68,12.68,0,0,0,2.72,8.52c1.37,1.87,3.59,1.83,5.58,2.23A9.72,9.72,0,0,0,150.59,264.35Zm-14.25,11.16a2.81,2.81,0,0,0,2.72-2.91,2.73,2.73,0,0,0-2.78-2.67,2.93,2.93,0,0,0-2.79,2.73A3,3,0,0,0,136.34,275.51Zm7.33-7.87a1.84,1.84,0,0,0-1.92-2,1.82,1.82,0,0,0-1.88,1.87,1.92,1.92,0,0,0,1.85,2.06A1.89,1.89,0,0,0,143.67,267.64Zm-12.69-2a2,2,0,0,0,.17,3.91,2,2,0,0,0-.17-3.91Zm.26,14a1.91,1.91,0,0,0-.28-3.81,1.83,1.83,0,0,0-1.83,1.9A1.93,1.93,0,0,0,131.24,279.68Zm10.42-3.82a1.87,1.87,0,0,0-1.79,1.79,1.9,1.9,0,0,0,1.86,2,1.8,1.8,0,0,0,1.92-1.79A1.88,1.88,0,0,0,141.66,275.86Z" transform="translate(-48.87 -70)" style={{ fill: "#131e28" }} />
                </g>
                <g className={moveWheels && styles.wheel || ""}>
                    <g transform="translate(0 72)" >
                        <circle cx="375.29" cy="134.02" r="38.39" style={{ fill: "#131b23" }} />
                        <circle cx="375.29" cy="134.02" r="29.62" style={{ fill: "#1f344c" }} />
                        <circle cx="375.3" cy="134.03" r="11.67" style={{ fill: "#314d77" }} />
                    </g>
                    <path d="M458.48,276.26a34.32,34.32,0,1,1-34.56-34.38A34.39,34.39,0,0,1,458.48,276.26Zm-45.62,6.33c-.43-1.38-.47-2.7-1.15-3.43a26.18,26.18,0,0,0-5.48-4.78c-2.68-1.61-4.59-.29-4.59,2.9a18.44,18.44,0,0,0,4.7,12.26c1.49,1.74,3.43,1.53,4.36-.58S412.18,284.64,412.86,282.59Zm33.65-5c0-.19-.05-.78-.15-1.36-.42-2.55-1.79-3.39-4.06-2.14a26,26,0,0,0-4.72,3.68,5.49,5.49,0,0,0-1.6,5.56,28.17,28.17,0,0,0,2,5.67c1,2.12,3,2.19,4.47.32A19.32,19.32,0,0,0,446.51,277.57Zm-35.3-10,0-.15a5.93,5.93,0,0,0,.73,0c1.9-.17,3.95,0,5.42-1.49a13,13,0,0,0,3.63-7.74c.27-2.32-.82-3.31-3.15-2.95a14.55,14.55,0,0,0-7.54,3.48,26,26,0,0,0-4.2,4.81c-.92,1.37-.25,2.73,1.35,3.26A35.26,35.26,0,0,0,411.21,267.6Zm13.13,31.51a63.25,63.25,0,0,0,6.71-1.67c1.78-.65,2.08-2,1-3.59-1.82-2.78-4.62-4.2-7.69-5.16a2.09,2.09,0,0,0-1.16.05,14.82,14.82,0,0,0-7.07,4.08c-1.73,1.92-1.57,3.4.83,4.34A58.7,58.7,0,0,0,424.34,299.11Zm14.07-31.23v0h1c3.67-.17,4.69-2.07,2.67-5.11a17.42,17.42,0,0,0-9.92-7.44,7,7,0,0,0-1.45-.23,1.92,1.92,0,0,0-2.25,2,12.58,12.58,0,0,0,2.72,8.52c1.36,1.87,3.58,1.83,5.58,2.23A10.72,10.72,0,0,0,438.41,267.88ZM424.16,279a2.81,2.81,0,0,0,2.72-2.91,2.73,2.73,0,0,0-2.78-2.67,2.93,2.93,0,0,0-2.79,2.73A3,3,0,0,0,424.16,279Zm7.33-7.87a1.9,1.9,0,1,0-3.8-.11,1.92,1.92,0,0,0,1.85,2.06A1.89,1.89,0,0,0,431.49,271.16Zm-12.69-2a2,2,0,0,0,.17,3.91,2,2,0,0,0-.17-3.91Zm.26,14a1.91,1.91,0,0,0-.28-3.81,1.83,1.83,0,0,0-1.83,1.9A1.93,1.93,0,0,0,419.06,283.2Zm10.42-3.82a1.88,1.88,0,0,0-1.79,1.79,1.9,1.9,0,0,0,1.86,2,1.81,1.81,0,0,0,1.93-1.79A1.89,1.89,0,0,0,429.48,279.38Z" transform="translate(-48.87 -70)" style={{ fill: "#131e28" }} />
                </g>
            </g>
            {clouds && <>
                <g id="cloud1" className={`${styles.cloudOne} ${styles.cloud}`}>
                    <path d="M246.35,37.55A28.29,28.29,0,0,0,237.83,39a47.35,47.35,0,0,0-77.91,0,28.11,28.11,0,0,0-37,27.05H274.83A28.48,28.48,0,0,0,246.35,37.55Z" transform="translate(-21.12 -18.56)" style={{ fill: "#3976b0", opacity: 0.5 }} />
                </g>
                <g id="cloud2" className={`${styles.cloudTwo} ${styles.cloud}`}>
                    <path d="M21.12,66a20.09,20.09,0,0,1,20.09-20.1A19.81,19.81,0,0,1,46,46.6,28.61,28.61,0,0,1,95.74,66Z" transform="translate(-21.12 -18.56)" style={{ fill: "#3976b0", opacity: 0.5 }} />
                </g>
                <g id="cloud3" className={`${styles.cloudThree} ${styles.cloud}`}>
                    <path d="M21.12,66a20.09,20.09,0,0,1,20.09-20.1A19.81,19.81,0,0,1,46,46.6,28.61,28.61,0,0,1,95.74,66Z" transform="translate(-21.12 -18.56)" style={{ fill: "#3976b0", opacity: 0.5 }} />
                </g>
            </>}
        </svg>
    </>;
}

export default Car;