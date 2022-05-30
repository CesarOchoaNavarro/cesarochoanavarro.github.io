import React from "react";
import './Work.css';

function Work() {
    return (
        <section class="background" id="background">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>
                                Technical Background
                            </h2>
                            <div class="row" id="back-info">
                                <h3> Associate Software Engineer</h3>
                                <div class="col-md-10">
                                    <dl>
                                        <dt>
                                            CDK Global
                                        </dt>
                                        <dd>
                                            Incoming Associate Software Engineer at CDK Global.
                                        </dd>
                                        
                                    </dl>
                                </div>
                                <div class="col-md-2">
                                    <dl>
                                        <dt>
                                            Portland, OR
                                        </dt>
                                        <dd>
                                            Current
                                        </dd>
                                    </dl>
                                </div>
                                
                            </div>
                            <hr></hr>
                            <div class="row" id="back-info">
                                <h3> Software Engineering Intern</h3>
                                <div class="col-md-10">
                                    <dl>
                                        <dt>
                                            CDK Global
                                        </dt>
                                        <dt>
                                            MongoDB | Python | Pandas/Pandas Data-Reader | MongoDB Compass
                                        </dt>
                                        <dd>
                                            <ul>
                                                <li> Managed 3 MongoDB collections inside a pre-prod database environment with over 3+ billion documents.</li>
                                                <li> Compressed 8 months of DMS (Dealer Management System) history to 2 months of relevant data to improve
                                                    performance when generating specified reports for clients
                                                </li>
                                                <li> Decreased query execution time by 90% when running specified operations on a collection.</li>

                                            </ul>
                                        </dd>
                                        
                                    </dl>
                                </div>
                                <div class="col-md-2">
                                    <dl>
                                        <dt>
                                            Portland, OR
                                        </dt>
                                        <dd>
                                            June 2021 - Sept 2021
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Work;