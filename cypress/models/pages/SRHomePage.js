import { HeroComponent } from "../components/SR/HeroComponent";

export class SRHomePage {
    heroComponent(){
        return new HeroComponent(cy.get(HeroComponent.COMP_SEL));
    } 
}