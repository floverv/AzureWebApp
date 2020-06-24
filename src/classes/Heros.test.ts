import Heros from './Heros';
import Masse from './Masse';

it('constructor Personnage', () =>{
    const OneHero: Heros = new Heros("Flo", "Guerrier", new Masse());
    
    expect(OneHero).toBeDefined();
    expect(OneHero.getMaxHp+1).toBeGreaterThan(OneHero.getHp);
    expect(OneHero.getClasse).toEqual("Guerrier");
    expect(OneHero.getDef).toBeLessThan(50);
})