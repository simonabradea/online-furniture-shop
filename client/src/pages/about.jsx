import './pages.css';

const About = () => {
    return (
        <div className="about-us-container mb-5">
            <div class="container mb-5">
                <h1 class="text-center fw-bold mt-5">Despre ZenMob Design</h1>
                <p class="text-center lead text-secondary">
                    Totul a pornit de la faptul că suntem fascinați de modul în care mobilierul reușește să schimbe aspectul unei încăperi prin simpla sa
                    poziționare sau prin paleta de culori incorporată în design-ul acestuia.
                </p>
            </div>
            <div class="container mb-5">
                <div class="row">
                    <div class="col">
                        <h1 class="fs-1 fw-bold">Cum a început totul?</h1>
                        <p class="text-secondary lead">
                            Mereu am fost impresionați de modul în care mobilierul poate
                            schimba starea unei persoane, astfel că dacă este poziționat în mod corespunzător poate induce o stare de liniște, relaxare, confort,
                            iar dacă este înghesuit, încărcat induce o stare de disconfort, sufocare, apăsare.</p>
                    </div>
                    <div class="col-sm">
                        <img class="img-fluid" src="images/carousel/cover6.png"></img>
                    </div>
                </div>
            </div>

            <div class="container mb-5">
                <div class="row">
                    <div class="col-sm">
                        <img class="img-fluid" src="images/carousel/cover1.png"></img>
                    </div>
                    <div class="col">
                        <h1 class="fs-1 fw-bold">Lorem ipsum dolor sit amet?</h1>
                        <p class="text-secondary lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt mi vel malesuada ultricies. Suspendisse volutpat lectus metus,
                            elementum rutrum massa vestibulum nec. Proin nec vulputate dolor. Nam sodales semper ipsum ac rutrum.</p>
                    </div>
                </div>
            </div>

            <div className="mb-5">

                <h5 class="fs-4 fw-bold">Praesent fermentum, lorem id tempus scelerisque?</h5>
                <p class="lead text-secondary">
                    Praesent fermentum, lorem id tempus scelerisque, orci neque sagittis augue, quis dignissim urna nunc efficitur odio. Duis non ornare
                    odio. Etiam suscipit, orci eget pellentesque ullamcorper, eros elit placerat neque, nec sollicitudin eros neque nec justo. Nulla
                    efficitur quam neque, ornare convallis erat pretium vel. Nulla molestie dolor sit amet convallis consectetur. Nullam elementum eros
                    ornare ipsum malesuada tristique. Etiam porttitor blandit neque, aliquet blandit arcu dapibus quis. Donec rhoncus elementum lorem vel
                    consequat. Sed faucibus semper sapien eget rutrum. Integer nec ipsum justo. Vestibulum fringilla purus interdum nisl rutrum porta.
                    Vestibulum faucibus quam leo, id pulvinar nulla varius a. Proin congue nisi non auctor mattis. Mauris ac lorem convallis, convallis
                    diam vitae, scelerisque risus. Vestibulum ac maximus urna.
                </p>

                <h5 class="fs-4 fw-bold">Cras finibus, ante quis aliquet ultrices, dui diam blandit lorem?</h5>
                <p class="lead text-secondary">
                    Cras finibus, ante quis aliquet ultrices, dui diam blandit lorem, a sollicitudin sem orci ac elit. Donec auctor lorem ante, sit amet
                    tristique massa feugiat sed. Nullam eget odio aliquam, varius mi quis, aliquet lorem. Vestibulum cursus est ut efficitur commodo.
                    Nullam elementum dui urna, non consectetur mi blandit sit amet. Donec in ligula molestie, fringilla augue vulputate, fringilla augue.
                    Aenean nec est eu dui tincidunt lobortis ac sed ex. Maecenas luctus dignissim pharetra. Proin quis sapien nunc. Etiam egestas eros
                    efficitur pretium venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur quis
                    tempor ligula, vitae interdum leo. In hac habitasse platea dictumst. Proin porta, mauris at scelerisque porttitor, lectus leo laoreet
                    erat in. Mattis nulla risus quis ante. Fusce massa nunc. Tempor a eros nec, laoreet luctus tortor. Mauris ullamcorper, sapien sodales
                    luctus interdum, felis elit scelerisque dolor, eget luctus nisl justo eu urna.
                </p>
            </div>
        </div>
    )
}

export default About;