import React, {Component} from 'react';
import {ExtensionPoint, store, actions} from './blue-ocean';
// TODO: ^^^^^ get store from <Provider> or through jenkins, not import! See: https://goo.gl/jCbg08
import AlienLairLink from './plugins/AlienLairLink.jsx'
import AlienPageSubMenu from './plugins/AlienPageSubMenu.jsx'

import {components} from 'jenkins-design-language';
let { WeatherIcon, Table } = components;

// TODO: Split the rest of this mess up into its own files

export class AboutPage extends Component {
    render() {
        return <article>
            <h1>About</h1>
            <p>
                Jenkins is an award-winning, cross-platform, continuous integration and continuous delivery application
                that increases your productivity. Use Jenkins to build and test your software projects continuously
                making it easier for developers to integrate changes to the project, and making it easier for users to
                obtain a fresh build. It also allows you to continuously deliver your software by providing powerful
                ways to define your build pipelines and integrating with a large number of testing and deployment
                technologies.
            </p>
            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Branches</th>
                    <th>Pull Requests</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>CloudBees / Panther-Apple-TV</td>
                    <td><WeatherIcon score="10"/></td>
                    <td>2 Failing</td>
                    <td>21 Passing</td>
                    <td><i className="material-icons">&#xE83A;</i></td>
                </tr>
                <tr>
                    <td>CloudBees / Private SaaS Edition</td>
                    <td><WeatherIcon score="10"/></td>
                    <td>2 Failing</td>
                    <td>21 Passing</td>
                    <td><i className="material-icons">&#xE83A;</i></td>
                </tr>
                <tr>
                    <td>CloudBees / Non-Git pipeline</td>
                    <td><WeatherIcon score="10"/></td>
                    <td>2 Failing</td>
                    <td>21 Passing</td>
                    <td><i className="material-icons">&#xE83A;</i></td>
                </tr>
                <tr>
                    <td>CloudBees / Console</td>
                    <td><WeatherIcon score="10"/></td>
                    <td>2 Failing</td>
                    <td>21 Passing</td>
                    <td><i className="material-icons">&#xE838;</i></td>
                </tr>
                <tr>
                    <td>CloudBees / cbn</td>
                    <td><WeatherIcon score="10"/></td>
                    <td>2 Failing</td>
                    <td>21 Passing</td>
                    <td><i className="material-icons">&#xE83A;</i></td>
                </tr>
                </tbody>
            </Table>
        </article>
    }
}

// This is just some example code with a silly name.
export class AlienPage extends Component {
    render() {
        return <article>
            <h1>This is the third page with a dynamic menu</h1>
            <div className="subMenu">
                <ExtensionPoint name="jenkins.pipeline.alienPageHome" />
            </div>
        </article>
    }
}

export class NotFoundPage extends Component {
    render() {
        console.log("Rendering NotFoundPage, props", this.props);
        return <article>
            <h1>Not found</h1>
            <p>This route (<strong>{this.props.location.pathname}</strong>) is not currently mapped to anything :(</p>
            <p><img src="/resources/hawhaw.gif"/></p>
        </article>
    }
}