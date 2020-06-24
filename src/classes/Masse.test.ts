import Masse from "./Masse";

it('constructor Masse', () =>{
    expect(new Masse().getMaxAtk).toBeLessThan(50);
    expect(new Masse().getMaxAtk).toBeGreaterThan(0);
})