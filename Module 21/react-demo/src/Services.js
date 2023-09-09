import webdev from './icons/coding.png'
import Service from './Service';
import './Services.css'

function Services(){
    return(
        <section id="services">
            <Service iconName={webdev}
                     serviceTitle="Web Development"
                     serviceDescription="Velit labore sint est culpa sunt officia minim minim velit consequat quis."
                     buttonText="Get in touch"/>
            <Service iconName={webdev}
                     serviceTitle="Graphic Design"
                     serviceDescription="Velit labore sint est culpa sunt officia minim minim velit consequat quis."
                     buttonText="See Samples"/>
            <Service iconName={webdev}
                     serviceTitle="Digital Marketing"
                     serviceDescription="Velit labore sint est culpa sunt officia minim minim velit consequat quis."
                     buttonText="Get a quote"/>
        </section>
    );
}

export default Services;