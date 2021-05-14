import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root{
    /* COLORS */
    --background-color: #0D19A3; //rich blue 
    --accent-background-color: #080F5B; //dark blue
    --emphasis-color: #15E099; // aquamarine
    --text-color: #fff; // white
    --primary-color: #E4C580; //beige
    --secondary-color: #F4E4C1; //light beige

}

* {
    /* CSS RESET */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Source Code Pro', monospace;
    background: var(--accent-background-color);
    color: var(--text-color);
}

h1 {
    font-size: 1.5rem;
}

p, li {
    font-size: 1rem;
}
`;
