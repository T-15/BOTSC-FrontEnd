import React from 'react';
import { Helmet } from 'react-helmet';
import Crest from '../images/crest-500-trans.png';
import Lester from '../images/lester-right.png';

const About = () => {
    return ( 
        <div>
            <Helmet>
                <title>BOTSC | About Us</title>
            </Helmet>
            <div class="page-heading">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <h1 class="page-heading__title">About<span class="highlight"> Us</span></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-content">
                <div className="container">
                    <div className="row">
                        <div className="content col-lg-12">
                            <article className="card card--lg post post--single">
                                <div className="card__content">
                                    <header className="post__header">
                                        <h2 className="post__title">The Burlington Old Timers Soccer Club</h2>
                                    </header>
                                    <div className="post__content">
                                        <img src={Crest} alt="" class="float-left pr-3" width="150px"/>
                                        <p>
                                            is a club for over .....well lets say  we're all beyond the age where we dream of playing for money, and are now content with playing for the shear fun of running around a field every Sunday, chasing a ball.
                                        </p>
                                            
                                        <p> 
                                            <img src={Lester} alt="" height="200" class="float-right pl-3"/>
                                            Throughout this site you will see our Mascot - Lester. He has been with us since the Club was formed in 1985. Lester shows up at all of the Club functions and helps to remind us that the Club is based upon the principle that "The Game" is played for fun and friendship.
                                        </p>
                                    
                                        <p>
                                            The season starts off with the annual registration followed by the draft, where conveners pick teams. The draft is followed soon after by a Darts night at one of our sponsors. This event helps to get team members better acquainted with each other.
                                        </p>
                                            
                                        <h6 class="semi-bold underline">Playing Schedule</h6>
                                        <p>
                                            The season has games playing on Sunday Mornings from May until the end of September. Sundays are scheduled league games with games at 9 a.m. and at 11 a.m.  All Sunday games take place at Iroquois Park and Millcroft Park in Burlington. A scheduled Wednesday Evening pickup game is played at Iroquois Park. See our games schedule for details.
                                        </p>
                                            
                                        <h6 class="semi-bold underline">Annual Golf Tournament</h6>
                                        <p>
                                            Also during the season, usually in July, we have a golf tournament that over the years has drawn wide acclaim. This is an opportunity for members to again get together in a non-soccer environment and enjoy a few laughs. The day is followed by a dinner at one of our sponsors. 
                                        </p>
                                            
                                        <h6 class="semi-bold underline">Rowly Bowl Soccer Tournament</h6>
                                        <p>
                                            The Rowly Bowl soccer tournament during the summer is an annual event that also is a big hit. During this event, 4 teams are drafted from participating members and each team plays 3 back-to-back games, each 30 minutes long with a break in between. After the tournament, interested participants - usually everybody - goes back to the farm for a barbecue and awards. For some, this is the highlight of the year, taking placing on a long weekend when no league games are scheduled.
                                        </p>
                                            
                                        <h6 class="semi-bold underline">Club Championship Tournament</h6>
                                        <p>
                                            The season finale on the park is our annual cup championships, where teams are split into two groups, the Priseman division and the Wylie division (named after members who have since passed away). This tournament is knockout with the final being played as the last official game of the season. The president presents trophies on the field after games. The championship trophy goes to the winner of the competition, while the Wooden Spoon is awarded to the team finished last.
                                        </p>
                                            
                                        <h6 class="semi-bold underline">Waiting List</h6>
                                        <p>
                                            The Burlington Old Timers Soccer Club maintains a running waiting list. This is a list of players who indicate they would like to join our club and have agreed to be placed on a list as a graded player. The grading depends mostly on word of mouth or on an assessment based on a pickup game.
                                        </p>
                                        <p>
                                            When an active player drops out he is replaced (from the list) by the first player of the same grade who we can contact and who is ready to commit. Therefore the replacement may not necessarily be the first player (or the first of that grade) on the list.
                                        </p>
                                        <p>
                                            We should also point out that we do not bump people up the list based on what they may be able to do for the Club. Entry is based solely on grade and place on the list.
                                        </p>
                                            
                                        <h6 class="semi-bold underline">Awards Banquet</h6>
                                        <p>
                                            The annual Awards Banquet to many is the highlight of the year. It is here that all club members gather for an evening of dinner, dance, and presentations of awards. Awards include:
                                        </p>
                                        <ul>
                                            <li>Club Championship Trophies for winners and runners up of the club championship tournament.</li>
                                            <li>Wooden Spoon Trophy awarded to the team who placed last in the club championship tournament.</li>
                                            <li>President's Award, for the person deemed by the club president to have had the greatest influence on the club's operation over the year</li>
                                            <li>Tongue Award granted to that club member who demonstrates either on or off the field a vocal facility for either extreme exuberant verbosity or widely recognized hot air.</li>
                                        </ul>
                                        <p>
                                            The awards are usually to the point, the focus of the evening being more on the social aspects of the teams gathered under one roof (raffles and spot prizes) than the aggrandizing or humiliation of any one team.
                                        </p>
                                        <p>
                                            You can view teams photographs taken over the years at the picture gallery.
                                        </p>
                                            
                                        <h6 class="semi-bold underline">Annual General Meeting</h6>
                                        <p>
                                            The annual general meeting is the official end of the season when executive and interested club members get together and make decisions for the next year. Typically, new conveners, if required, are nominated and voted in, and constitutional amendments proposed and accepted or rejected
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;