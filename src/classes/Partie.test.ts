import Partie from './Partie';
import Heros from './Heros';
import Epee from './Epee';

it('constructor Partie', () =>{
    const partie = new Partie();
    const heros: Heros[] = [new Heros("Flo", "Guerrier", new Epee()), new Heros("Julien", "Assassin", new Epee())];
    
    partie.setNom = "LaPartie";
    partie.setHeros = heros;
    partie.getHeros[1].setHp = 12;

    expect(partie.getNom).toEqual("LaPartie");
    expect(partie.getHeros[0].getNom).toEqual("Flo");
    expect(partie.getHeros[1].getHp).toEqual(12);
})