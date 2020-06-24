import Epee from "./Epee";

it('constructor Masse', () =>{
    expect(new Epee().getCritChance).toBeLessThan(40);
    expect(new Epee().getCritChance).toBeGreaterThan(0);
})