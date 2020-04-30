import React from 'react';
import { useForm } from "react-hook-form";

export default function Form(props) {
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    });

    return (
        <form className="col-lg-12 justify-content-center" onSubmit={handleSubmit(props.onSubmit)}>
            <div className="card bg-light">
                <div className="card-body row">
                    <section className={ errors.firstName ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
                        <label
                            className="control-label"
                            htmlFor="First Name">
                            First Name
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            aria-invalid={errors.firstName ? "true" : "false"}
                            aria-describedby="firstNameError"
                            ref={register({ required: true, maxLength: 80 })}
                        />
                        <span id="firstNameError" style={{ display: errors.firstName ? "block" : "none" }}>
                            {errors.firstName && <p>This is required</p>}
                        </span>
                    </section>
                    <section className={ errors.lastName ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
                        <label
                            className="control-label"
                            htmlFor="Last Name">
                            Last Name
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            aria-invalid={errors.lastName ? "true" : "false"}
                            aria-describedby="lastNameError"
                            ref={register({ required: true, maxLength: 100 })}
                        />
                        <span id="lastNameError" style={{ display: errors.lastName ? "block" : "none" }}>
                            {errors.lastName && <p>This is required</p>}
                        </span>
                    </section>
                    <section className={ errors.email ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
                        <label
                            className="control-label"
                            htmlFor="Email">
                            Email
                        </label>
                        <input
                            className="form-control"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            aria-invalid={errors.email ? "true" : "false"}
                            aria-describedby="emailError"
                            ref={register({required: true, pattern: /^\S+@\S+$/i})}
                        />
                        <span id="emailError" style={{ display: errors.email ? "block" : "none" }}>
                            {errors.email && <p>Invalid Value, must be in proper email format</p>}
                        </span>
                    </section>
                    <section className={ errors.postalCode ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
                        <label
                            className="control-label"
                            htmlFor="Postal Code">
                            Postal Code
                        </label>
                        <input 
                            className="form-control"
                            type="text" 
                            id="postalCode"
                            placeholder="XXXXXX" 
                            name="postalCode" 
                            ref={register({required: true, maxLength: 6, minLength: 6, pattern: /[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]/i})} 
                        />
                        <span id="postalCodeError" style={{ display: errors.postalCode ? "block" : "none" }}>
                            {errors.postalCode && <p>Invalid Value, must be in format a9a9a9</p>}
                        </span>
                    </section>
                    <section className={ errors.phone ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
                        <label
                            className="control-label"
                            htmlFor="Phone">
                            Phone
                        </label>
                        <input 
                            className="form-control" 
                            type="tel" 
                            id="phone"
                            placeholder="9999999999" 
                            name="phone" 
                            ref={register({required: true, minLength: 10, maxLength: 10})} 
                        />
                        <span id="phoneError" style={{ display: errors.phone ? "block" : "none" }}>
                            {errors.phone && <p>Invalid value, must be in format 9999999999</p>}
                        </span>
                    </section>
                    <section className={ errors.birthday ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
                        <label
                            className="control-label"
                            htmlFor="Date Of Birth">
                            Date Of Birth
                        </label>
                        <input 
                            className="form-control"
                            type="date"
                            id="birthday"
                            placeholder="Birthday" 
                            name="birthday" 
                            ref={register({required: true})} 
                        />
                        <span id="birthdayError" style={{ display: errors.birthday ? "block" : "none" }}>
                            {errors.birthday && <p>This is required</p>}
                        </span>
                    </section>
                    <section className={ errors.positions ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
                        <label
                            className="control-label"
                            htmlFor="Positions">
                            Playing Position (Select 1 or more)
                        </label>
                        <section className="form-group col-md-12">
                            {props.positions.map( position => (
                                <label key={position.id} className="checkbox checkbox-inline mr-2">
                                    <input
                                        className="form-control"
                                        type="checkbox"
                                        id={position.name}
                                        name="positions"
                                        value={position.id}
                                        ref={register({required: true})}
                                    /> 
                                    {position.name} <span className="checkbox-indicator"></span>
                                </label>
                            ))}
                        </section>
                        <span id="positionsError" style={{ display: errors.positions ? "block" : "none" }}>
                            {errors.positions && <p>Must select atleast one</p>}
                        </span>
                    </section>
                    <section className={ errors.grade ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
                        <label
                            className="control-label"
                            htmlFor="Skill Level">
                            Skill Level
                        </label>
                        <section className="form-group col-md-12">
                            <label className="radio radio-inline mr-2">
                                <input type="radio" name="grade" id="inlineRadio1" value="1" ref={register({required: true})}/> 
                                Elite
                                <span className="radio-indicator"></span>
                            </label>
                            <label className="radio radio-inline mr-2">
                                <input type="radio" name="grade" id="inlineRadio2" value="2" ref={register({required: true})}/> 
                                Excellent 
                                <span className="radio-indicator"></span>
                            </label>
                            <label className="radio radio-inline mr-2">
                                <input type="radio" name="grade" id="inlineRadio3" value="3" ref={register({required: true})}/> 
                                Good 
                                <span className="radio-indicator"></span>
                            </label>
                            <label className="radio radio-inline mr-2">
                                <input type="radio" name="grade" id="inlineRadio4" value="4" ref={register({required: true})}/> 
                                Fair 
                                <span className="radio-indicator"></span>
                            </label>
                            <label className="radio radio-inline mr-2">
                                <input type="radio" name="grade" id="inlineRadio5" value="5" ref={register({required: true})}/> 
                                Beginner 
                                <span className="radio-indicator"></span>
                            </label>
                        </section>
                        <span id="gradeError" style={{ display: errors.grade ? "block" : "none" }}>
                            {errors.grade && <p>Must select atleast one</p>}
                        </span>
                    </section>
                    <section className={ errors.division ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
                        <label
                            className="control-label"
                            htmlFor="Division">
                            Desired Division
                        </label>
                        <section className="form-group col-md-12">
                            {props.divisions.map( division => (
                                <label key={division.id} className="radio radio-inline mr-2">
                                    <input type="radio" name="division" id={"inlineRadio" + division.id} value={division.id} ref={register({required: true})}/> 
                                    {division.name}
                                    <span className="radio-indicator"></span>
                                </label>
                            ))}
                        </section>
                        <span id="divisionError" style={{ display: errors.division ? "block" : "none" }}>
                            {errors.division && <p>Must select atleast one</p>}
                        </span>
                    </section>
                    <section className={ errors.referralMethod ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
                        <label
                            className="control-label"
                            htmlFor="Referral Method">
                            How did you hear about BOTSC?
                        </label>
                        <section className="form-group col-md-12">
                            {props.referral_methods.map( referral_method => (
                                <label key={referral_method.id} className="radio radio-inline mr-2">
                                    <input type="radio" name="referralMethod" id={"inlineRadio" + referral_method.id} value={referral_method.id} ref={register({required: true})}/> 
                                    {referral_method.name}
                                    <span className="radio-indicator"></span>
                                </label>
                            ))}
                        </section>
                        <span id="referralMethodError" style={{ display: errors.referralMethod ? "block" : "none" }}>
                            {errors.referralMethod && <p>Must select atleast one</p>}
                        </span>
                    </section>
                    <section className={ errors.referrerName ? "form-group col-md-4 has-error" : "form-group col-md-4" }>
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
                            ref={register}
                        />
                        <span id="referrerError" style={{ display: errors.referrer ? "block" : "none" }}>
                            {errors.referrer && <p>This is required</p>}
                        </span>
                    </section>
                    <section className={ errors.additionalInfoName ? "form-group col-md-12 has-error" : "form-group col-md-12" }>
                        <label
                            className="control-label"
                            htmlFor="Additional Info">
                            Any additional Information?
                        </label>
                        <input
                            className="form-control"
                            type="textarea"
                            rows="3"
                            name="additionalInfo"
                            placeholder="....."
                            ref={register}
                        />
                        <span id="additionalInfoError" style={{ display: errors.additionalInfo ? "block" : "none" }}>
                            {errors.additionalInfo && <p>This is required</p>}
                        </span>
                    </section>
                    
                    <div className="form-group col-md-12 text-right mb-0">
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}