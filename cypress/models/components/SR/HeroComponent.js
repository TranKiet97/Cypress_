export class HeroComponent {

    static COMP_SEL = '.showcase-hero';

    constructor(compenent){
        this.compenent = compenent;
    }

    get cardTitle(){
        return this.compenent.find('.card__title');
    }
}