import { Config, Generator } from '@tiyl/generator';

describe('Generator', () => {
  describe('generate', () => {
    it('runs without error', () => {
      const config: Config = {
        race: 'Kobold',
        subrace: null,
        class: null,
        background: null,
        alignment: null,
        age: 0,
        charismaModifier: 4,
        sources: null
      };
      const generator = new Generator(config);
      const character = generator.generate();
      console.log(character.name);
    });
  });
});
