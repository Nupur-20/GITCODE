import React from "react"
import PropTypes from "prop-types"

function About(props) {
    return (
        <div class="card my-5 mx-3">
            <div class="card-body-1">


                <div class="row">
                    <div class="col-4">
                        <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
                            <nav class="nav nav-pills flex-column">
                                <a class="nav-link custom-link" href="#item-1">Item 1</a>
                                <nav class="nav nav-pills flex-column">
                                    <a class="nav-link ms-3 my-1 custom-link" href="#item-1-1">Item 1-1</a>
                                    <a class="nav-link ms-3 my-1 custom-link" href="#item-1-2">Item 1-2</a>
                                </nav>
                                <a class="nav-link custom-link" href="#item-2">Item 2</a>
                                <a class="nav-link custom-link" href="#item-3">Item 3</a>
                                <nav class="nav nav-pills flex-column">
                                    <a class="nav-link ms-3 my-1 custom-link" href="#item-3-1">Item 3-1</a>
                                    <a class="nav-link ms-3 my-1 custom-link" href="#item-3-2">Item 3-2</a>
                                </nav>
                            </nav>
                        </nav>
                    </div>

                    <div class="col-8">
                        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
                            <div id="item-1">
                                <h4>Item 1</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quae dignissimos aliquam ipsam itaque tempora rerum consequuntur exercitationem, sint cum nesciunt est? Quos qui et nobis vel cupiditate quaerat sapiente! Molestiae atque est voluptatem labore molestias quasi quam consectetur!</p>
                            </div>
                            <div id="item-1-1">
                                <h5>Item 1-1</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eveniet quisquam, consectetur sit aliquam fugit reprehenderit. Eos perferendis quasi incidunt dolores, ratione magni soluta vero tenetur aut atque sint consequuntur in libero id aspernatur excepturi nostrum provident quis earum laboriosam impedit natus iste quidem? Nisi similique totam iusto unde maiores voluptatibus dolores ab assumenda dignissimos, aut ad fugiat vel dolor aspernatur a dolorem provident rerum fugit in, culpa molestias dicta eius libero. Corporis quis repellendus a dicta. Saepe.</p>
                            </div>
                            <div id="item-1-2">
                                <h5>Item 1-2</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus modi consequatur neque officiis aperiam molestiae dolor, adipisci ab delectus corrupti.
                                </p>
                            </div>
                            <div id="item-2">
                                <h4>Item 2</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus harum itaque voluptas, cupiditate molestias reprehenderit, eligendi incidunt possimus porro nihil debitis nulla. Voluptatibus architecto reiciendis vitae. Optio ea maiores deleniti, facilis exercitationem voluptas quasi assumenda autem earum repellat. Commodi, error delectus? A inventore, expedita perferendis laudantium illum eos sunt! Incidunt eius nemo voluptatem sequi porro impedit dolore ipsam laborum ab libero nobis voluptatum, nihil harum accusamus, velit veniam itaque aliquam inventore recusandae quod sint ducimus? Quis explicabo sapiente officiis suscipit corrupti, illo harum veritatis quisquam illum vitae exercitationem obcaecati enim repellat perferendis temporibus, non praesentium a quia magni ea labore!</p>
                            </div>
                            <div id="item-3">
                                <h4>Item 3</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, voluptatum. Omnis voluptatem impedit nihil quibusdam. Porro officia ab inventore soluta.</p>
                            </div>
                            <div id="item-3-1">
                                <h5>Item 3-1</h5>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div id="item-3-2">
                                <h5>Item 3-2</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam possimus animi ad necessitatibus! Quis accusantium cum libero officiis, perferendis blanditiis quos voluptas facilis recusandae natus minima, et est! Saepe accusantium harum, nihil ex quas alias laudantium nulla assumenda, eveniet asperiores maiores itaque dolorum odit voluptatum recusandae dolorem. Quia in cumque reiciendis quas tenetur soluta impedit, necessitatibus iste! Quaerat dignissimos recusandae magni, vero accusamus quam soluta veniam inventore minus, sunt cupiditate alias illum maiores assumenda tempore tenetur aliquam fuga! Numquam dolores illo ullam voluptas! Inventore, exercitationem accusamus nostrum omnis beatae aspernatur!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

About.propTypes={}

export default About
