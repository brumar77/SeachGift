
import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Prueba en <GifItem />', () => {
    
    const titulo = 'Titulo'
    const url ='https://one-punch.com/titulo.jpg'
    
    test('debe de hacer match con el snapshot ', () => {
        const { container } = render(<GifItem title={ titulo } url={ url }/>)

        expect(container).to
    });
});