import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import crest from '../../../images/crest-500-trans.png';

class Mobile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        // Mobile Menu Toggle
        $('#header-mobile__toggle').on('click', function(){
            $('.site-wrapper').toggleClass('site-wrapper--has-overlay');
        });

        $('.site-overlay, .main-nav__back').on('click', function(){
            $('.site-wrapper').toggleClass('site-wrapper--has-overlay');
        });

        // Clone Top Bar menu to Main Menu
        var children = $('.nav-account').children().clone();
        $('.main-nav__list').append(children);

        // Clone Header Info to Mobile Menu
        var header_info1 = $('.info-block__item--contact-primary').clone();
        var header_info2 = $('.info-block__item--contact-secondary').clone();
        $('.main-nav__list').append(header_info1).append(header_info2);

        // Clone Social Links to Main Menu
        var $social = $('.social-links--main-nav');
        var social_li = $social.children().clone();
        var social_li_new = social_li.contents().unwrap();
        social_li_new.appendTo($('.main-nav__list')).wrapAll('<li class="main-nav__item--social-links"></li>');

        // Add toggle button and class if menu has submenu
        var $nav_list_li = $('.main-nav__list > li');
        $nav_list_li.has('.main-nav__sub').addClass('has-children').prepend('<span class="main-nav__toggle"></span>');
        $nav_list_li.has('.main-nav__megamenu').addClass('has-children').prepend('<span class="main-nav__toggle"></span>');

        $('.main-nav__toggle').on('click', function(){
            $(this).toggleClass('main-nav__toggle--rotate')
            .parent().siblings().children().removeClass('main-nav__toggle--rotate');

            $(".main-nav__sub, .main-nav__megamenu").not($(this).siblings('.main-nav__sub, .main-nav__megamenu')).slideUp('normal');
            $(this).siblings('.main-nav__sub').slideToggle('normal');
            $(this).siblings('.main-nav__megamenu').slideToggle('normal');
        });

        // Add toggle button and class if submenu has sub-submenu
        $('.main-nav__list > li > ul > li').has('.main-nav__sub-2').addClass('has-children').prepend('<span class="main-nav__toggle-2"></span>');
        $('.main-nav__list > li > ul > li > ul > li').has('.main-nav__sub-3').addClass('has-children').prepend('<span class="main-nav__toggle-2"></span>');

        $('.main-nav__toggle-2').on('click', function(){
            $(this).toggleClass('main-nav__toggle--rotate');
            $(this).siblings('.main-nav__sub-2').slideToggle('normal');
            $(this).siblings('.main-nav__sub-3').slideToggle('normal');
        });
    }
    render() { 
        return ( 
            <div className="header-mobile clearfix" id="header-mobile">
                <div className="header-mobile__logo">
                    <Link to="/">
                        <img src={crest} srcSet={crest} width="97" alt="Alchemists" className="header-logo__img"/>
                    </Link>
                </div>
                <div className="header-mobile__inner">
                    {/* eslint-disable-next-line*/}
                    <a id="header-mobile__toggle" className="burger-menu-icon"><span className="burger-menu-icon__line"></span></a>
                </div>
            </div>
        );
    }
}
 
export default Mobile;