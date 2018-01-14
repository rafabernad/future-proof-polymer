import { Element } from '@polymer/polymer/polymer-element';
import { customElement, changeMessage, showAnotherAlert } from '@demo/decorators';
import template from './demo-component.html';

@customElement('demo-component')
@changeMessage('Modified with love... and decorators!')
class DemoComponent extends Element {
    static message = "This is demo component";
    static get template() {
        return template;
    }
    static get properties() {
        return {
            message: { type: String, value: DemoComponent.message }
        }
    }
    @showAnotherAlert('This one comes from a decorator')
    showAlert() {
        alert("Hello from Demo Component");
    }
}

export default DemoComponent;