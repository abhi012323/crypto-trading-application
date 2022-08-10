import { fireEvent, render,screen } from "@testing-library/react";
import PrimaryButton from ".";
describe("Button Test",()=>{
    const fakeClick=()=>{
        console.log("Clicked the Fucntion!!!")
    }
    test("Click Test for buy",()=>{
        render(<PrimaryButton text="Buy" buttonVariant="contained" type="primary" onClick={fakeClick}/>)
        const element=screen.getByText("Buy")
        fireEvent.click(element,{button:0})
        expect(element.onclick).toBeTruthy()
    
    })
    test("Click test for sell",()=>{
        render(<PrimaryButton text="Sell" buttonVariant="contained" type="secondary" onClick={fakeClick} />)
        const element=screen.getByText("Sell")
        fireEvent.click(element,{button:0})
        expect(element.onclick).toBeTruthy()
    })
})