import React, { Component } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import Helmet from 'react-helmet';
import FormError from './application/FormError';

class ApplyForMembership extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            divisions: [],
            referral_methods: [],

            first_name: '',
            last_name: '',
            email: '',
            postal_code: '',
            phone: '',
            date_of_birth: '',
            positions: new Map(),
            skill_level: '',
            division: '',
            referral_method: '',
            referrer: '',
            additional_info: '',
            errorMessage: null
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleCheckChange = this.handleCheckChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        const urlD = 'http://localhost:3001/api/v1/divisions/active';
    
        axios.get(urlD)
        .then((response) => {
          console.log(response)
          this.setState({
            divisions: response.data
          })
        })
        .catch((error) => {
          this.setState({
            error: true
          })
        });

        const urlR = 'http://localhost:3001/api/v1/referral_methods';
    
        axios.get(urlR)
        .then((response) => {
          console.log(response)
          this.setState({
            referral_methods: response.data
          })
        })
        .catch((error) => {
          this.setState({
            error: true
          })
        });
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({[name]: value});
    }

    handleCheckChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ positions: prevState.positions.set(item, isChecked) }));
    }

    handleSubmit(e) {

        e.preventDefault();

        var self = this
        let url = "";

        axios.post(url, {

        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            self.setState({errorMessage: error.response.data.message})            
        });
    }

    render() { 
        return ( 
            <div>
                <Helmet>
                    <title>BOTSC | Apply</title>
                </Helmet>
                <div className="page-heading">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <h1 className="page-heading__title">Apply For<span className="highlight"> Membership</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-content">
                    <div className="container">
                        <div className="row">
                            <form className="col-lg-12 justify-content-center" onSubmit={this.handleSubmit}>
                                <div className="card bg-light">
                                    <div className="card-body row">
                                        { this.state.errorMessage !== null ? (
                                            <FormError theMessage={this.state.errorMessage}/>
                                        ) : null}
                                        <section className="form-group col-md-4">
                                            <label
                                                className="control-label"
                                                htmlFor="First Name">
                                                First Name
                                            </label>
                                            <input
                                                required
                                                className="form-control"
                                                type="text"
                                                name="first_name"
                                                placeholder="First Name"
                                                value={this.state.first_name}
                                                onChange={this.handleChange}
                                            />
                                        </section>
                                        <section className="form-group col-md-4">
                                            <label
                                                className="control-label"
                                                htmlFor="Last Name">
                                                Last Name
                                            </label>
                                            <input
                                                required
                                                className="form-control"
                                                type="text"
                                                name="last_name"
                                                placeholder="Last Name"
                                                value={this.state.last_name}
                                                onChange={this.handleChange}
                                            />
                                        </section>
                                        <section className="form-group col-md-4">
                                            <label
                                                className="control-label"
                                                htmlFor="Email">
                                                Email
                                            </label>
                                            <input
                                                required
                                                className="form-control"
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="Email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                            />
                                        </section>
                                        <section className="form-group col-md-4">
                                            <label
                                                className="control-label"
                                                htmlFor="Postal Code">
                                                Postal Code
                                            </label>
                                            <InputMask mask="a9a-9a9" name="postal_code" value={this.state.postal_code} onChange={this.handleChange}>
                                                {(inputProps) => <input {...inputProps} required placeholder="XXX-XXX" className="form-control" type="text"/>}
                                            </InputMask>
                                        </section>
                                        <section className="form-group col-md-4">
                                            <label
                                                className="control-label"
                                                htmlFor="Phone">
                                                Phone
                                            </label>
                                            <InputMask mask="(999) 999-9999" name="phone" value={this.state.phone} onChange={this.handleChange}>
                                                {(inputProps) => <input {...inputProps} required placeholder="(XXX) XXX-XXXX" className="form-control" type="tel"/>}
                                            </InputMask>
                                        </section>
                                        <section className="form-group col-md-4">
                                            <label
                                                className="control-label"
                                                htmlFor="Date Of Birth">
                                                Date Of Birth
                                            </label>
                                            <InputMask mask="9999-99-99" name="phone" value={this.state.date_of_birth} onChange={this.handleChange}>
                                                {(inputProps) => <input {...inputProps} required placeholder="YYYY-MM-DD" className="form-control" type="text"/>}
                                            </InputMask>
                                        </section>
                                        <section className="form-group col-md-4">
                                            <label
                                                className="control-label"
                                                htmlFor="Positions">
                                                Playing Position (Select 1 or more)
                                            </label>
                                            <section className="form-group col-md-12">
                                                <label class="checkbox checkbox-inline mr-2">
                                                    <input
                                                        className="form-control"
                                                        type="checkbox"
                                                        id="forward"
                                                        name="forward"
                                                        value={this.state.forward}
                                                        onChange={this.handleCheckChange}
                                                    /> 
                                                    Forward <span class="checkbox-indicator"></span>
                                                </label>
                                                <label class="checkbox checkbox-inline mr-2">
                                                    <input
                                                        className="form-control"
                                                        type="checkbox"
                                                        id="midfield"
                                                        name="midfield"
                                                        value={this.state.midfield}
                                                        onChange={this.handleCheckChange}
                                                    /> 
                                                    Midfield <span class="checkbox-indicator"></span>
                                                </label>
                                                <label class="checkbox checkbox-inline mr-2">
                                                    <input
                                                        className="form-control"
                                                        type="checkbox"
                                                        id="defence"
                                                        name="defence"
                                                        value={this.state.defence}
                                                        onChange={this.handleCheckChange}
                                                    /> 
                                                    Defence <span class="checkbox-indicator"></span>
                                                </label>
                                                <label class="checkbox checkbox-inline mr-2">
                                                    <input
                                                        className="form-control"
                                                        type="checkbox"
                                                        id="goalkeeper"
                                                        name="goalkeeper"
                                                        checked={this.state.goalkeeper}
                                                        onChange={this.handleCheckChange}
                                                    /> 
                                                    Goal keeper <span class="checkbox-indicator"></span>
                                                </label>
                                            </section>
                                        </section>
                                        <section className="form-group col-md-4">
                                            <label
                                                className="control-label"
                                                htmlFor="Skill Level">
                                                Skill Level
                                            </label>
                                            <section className="form-group col-md-12">
                                                <label class="radio radio-inline mr-2">
                                                    <input type="radio" name="skill_level" id="inlineRadio1" value="1" onChange={this.handleChange}/> 
                                                    Elite
                                                    <span class="radio-indicator"></span>
                                                </label>
                                                <label class="radio radio-inline mr-2">
                                                    <input type="radio" name="skill_level" id="inlineRadio2" value="2" onChange={this.handleChange}/> 
                                                    Excellent 
                                                    <span class="radio-indicator"></span>
                                                </label>
                                                <label class="radio radio-inline mr-2">
                                                    <input type="radio" name="skill_level" id="inlineRadio3" value="3" onChange={this.handleChange}/> 
                                                    Good 
                                                    <span class="radio-indicator"></span>
                                                </label>
                                                <label class="radio radio-inline mr-2">
                                                    <input type="radio" name="skill_level" id="inlineRadio4" value="4" onChange={this.handleChange}/> 
                                                    Fair 
                                                    <span class="radio-indicator"></span>
                                                </label>
                                                <label class="radio radio-inline mr-2">
                                                    <input type="radio" name="skill_level" id="inlineRadio5" value="5" onChange={this.handleChange}/> 
                                                    Beginner 
                                                    <span class="radio-indicator"></span>
                                                </label>
                                            </section>
                                        </section>
                                        <section className="form-group col-md-4">
                                            <label
                                                className="control-label"
                                                htmlFor="Division">
                                                Desired Division
                                            </label>
                                            <section className="form-group col-md-12">
                                                {this.state.divisions.map( division => (
                                                    <label class="radio radio-inline mr-2">
                                                        <input type="radio" name="division" id={"inlineRadio" + division.id} value={division.id} onChange={this.handleChange}/> 
                                                        {division.name}
                                                        <span class="radio-indicator"></span>
                                                    </label>
                                                ))}
                                            </section>
                                        </section>
                                        <section className="form-group col-md-4">
                                            <label
                                                className="control-label"
                                                htmlFor="Division">
                                                How did you hear about BOTSC?
                                            </label>
                                            <section className="form-group col-md-12">
                                                {this.state.referral_methods.map( referral_method => (
                                                    <label class="radio radio-inline mr-2">
                                                        <input type="radio" name="referral_method" id={"inlineRadio" + referral_method.id} value={referral_method.id} onChange={this.handleChange}/> 
                                                        {referral_method.name}
                                                        <span class="radio-indicator"></span>
                                                    </label>
                                                ))}
                                            </section>
                                        </section>
                                        <section className="form-group col-md-4">
                                            <label
                                                className="control-label"
                                                htmlFor="Referrer">
                                                If Club Member, name of member?
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="referrer"
                                                placeholder="Club Member"
                                                value={this.state.referrer}
                                                onChange={this.handleChange}
                                            />
                                        </section>
                                        <section className="form-group col-md-12">
                                            <label
                                                className="control-label"
                                                htmlFor="Additional Info">
                                                Any additional Information?
                                            </label>
                                            <input
                                                className="form-control"
                                                type="textarea"
                                                rows="3"
                                                name="additional_info"
                                                placeholder="....."
                                                value={this.state.additional_info}
                                                onChange={this.handleChange}
                                            />
                                        </section>
                                        <div className="form-group col-md-12 text-right mb-0">
                                            <button className="btn btn-primary" type="submit">
                                               Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ApplyForMembership;