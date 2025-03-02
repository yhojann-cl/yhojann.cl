import AppComponent from '../component/component';
import img from '../assets/images/bg.jpg';

/**
 * 
 */
export default class MainPage extends AppComponent {

    /**
     * Page route.
     */
    static route = /^\/$/;

    /**
     * Special constructor for base component definitions.
     * @param {*} props 
     */
    constructor(props) {
        super(props, {
            strings: { },
            state: { },
        });
    }

    render() {
        return (
            <div>
                <img src={img} />
                <p>Follow the white rabit.</p>
            </div>
        );
    }
}