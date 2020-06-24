const assert = require('assert');
const { default: Partie } = require('../src/classes/Partie');

describe('Partie Test', () => {
    it('should return 2', () => {
        
        const partie = new Partie();
        partie.setNom("leNom");
        assert.equal(partie.getNom(), "leNom");
    });
});