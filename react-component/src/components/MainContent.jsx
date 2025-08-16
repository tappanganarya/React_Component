function MainContent() {
    return (
        <main>
            <section className="main-content">
                <div className="card1">
                    <div className="card">
                        <div className="card-header">
                            <h3>Our Products</h3>
                            <button className="icon-btn">
                                <img src="/icons/roket.svg" alt="professional icon" className="card-icon" />
                            </button>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Enim animi necessitatibus est eius sunt, explicabo optio tenetur!
                        </p>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h3>Our Products</h3>
                            <button className="icon-btn">
                                <img src="/icons/roket.svg" alt="professional icon" className="card-icon" />
                            </button>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Enim animi necessitatibus est eius sunt, explicabo optio tenetur!
                        </p>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h3>Our Products</h3>
                            <button className="icon-btn">
                                <img src="/icons/roket.svg" alt="professional icon" className="card-icon" />
                            </button>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Enim animi necessitatibus est eius sunt, explicabo optio tenetur!
                        </p>
                    </div>
                </div>
            </section>

            <section class="information">
                <div class="info-card">
                    <div class="info-text">
                        <h2>Practice Everyday</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi necessitatibus est eius sunt, explicabo optio tenetur!</p>
                        <a href="#" class="btn">More Information..</a>
                    </div>
                    <div class="info-image">
                        <img src="/images/b01.jpg" alt="" />
                    </div>
                </div>

                <div class="info-card">
                    <div class="info-text">
                        <h2>Practice Everyday</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi necessitatibus est eius sunt, explicabo optio tenetur!</p>
                        <a href="#" class="btn">More Information..</a>
                    </div>
                    <div class="info-image">
                        <img src="/images/event.jpg" alt="" />
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="column">
                    <h2>Schedule</h2>
                    <p>Monday</p>
                    <p>Tuesday</p>
                    <p>Wednesday</p>
                    <p>Thursday</p>
                    <p>Friday</p>
                    <p>Saturday</p>
                    <p>Sunday</p>
                </div>

                <div className="columnnews">
                    <h2>News</h2>
                    <strong>Breaking News</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Enim animi necessitatibus est eius sunt, explicabo optio tenetur!</p>
                </div>

                <div className="columnlinks">
                    <h2>Links</h2>
                    <img src="/images/call.svg" alt="" />
                    <img src="/images/call.svg" alt="" />
                    <img src="/images/call.svg" alt="" />
                </div>

            </section>

        </main>
    )
}
export default MainContent;
