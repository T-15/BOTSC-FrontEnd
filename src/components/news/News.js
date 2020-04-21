import React, { Component } from 'react';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            thumb: props.thumb || process.env.PUBLIC_URL + "/images/samples/single-post-img1.jpg",
            label: props.label || "",
            title: props.title || "",
            date: props.date || "",
            datetime: props.datetime || "",
            content: props.content || ""
         }
    }
    render() { 
        return (
            <article className="card card--lg post post--single">
                {this.state.thumb ?
                    <figure className="post__thumbnail">
                        <img src={this.props.thumb} alt="" />
                    </figure>
                : null }

                <div className="card__content">
                    {this.state.label ?
                        <div className="post__category">
                            <span className="label posts__cat-label">{this.state.label}</span>
                        </div>
                    : null }
                    <header className="post__header">
                        <h2 className="post__title">{this.state.title}</h2>
                        <ul className="post__meta meta">
                            { this.state.date ?
                                <li className="meta__item meta__item--date">
                                    <time datetime={this.state.datetime}>{this.state.date}</time>
                                </li>
                            : null }
                        </ul>
                    </header>
                    <div className="post__content" dangerouslySetInnerHTML={{ __html: this.state.content }}>

                    </div>
                </div>
            </article>

        );
    }
}
 
export default News;