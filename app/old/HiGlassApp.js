import '../styles/HiGlassApp.css';
import React from 'react';
import ReactDOM from 'react-dom';
import slugid from 'slugid';
import {MultiViewContainer} from './MultiViewContainer.jsx';
import {MultiTrackContainer} from './MultiTrackContainer.jsx';
import {MultiTrackEditContainer} from './MultiTrackContainer.jsx';
import {HiGlassInput} from './HiGlassInput.jsx';
import {Button, Panel, FormGroup, ControlLabel, FormControl, SafeAnchor} from 'react-bootstrap';

export class HiGlassApp extends React.Component {
    constructor(props) {
        super(props);

    this.defaultViewString = JSON.stringify(JSON.parse(this.props.viewConfigString), null, 2);
    let viewConfigObject = JSON.parse(this.props.viewConfigString);
    this.addUids(viewConfigObject)

    this.state = {
        //viewConfig : []

        viewConfig : { 
            object: viewConfigObject,
            text: JSON.stringify(viewConfigObject)
        },
        inputOpen: false
    }
    //this.handleNewConfig(this.props.viewConfigString);

    console.log('this.state:', this.state);
    this.updateLinkedViews(this.state.viewConfig.object);

    }

    addUids(viewConfigObject) {
        /**
         * Add a uid to each view in the viewConfig. Useful for identifying views
         * that get closed in other portions of the application.
         *
         */
        for (let i = 0; i < viewConfigObject.views.length; i++) {
            if ('uid' in viewConfigObject.views[i])
                continue

            viewConfigObject.views[i].uid = slugid.nice();
        }
    }

    updateLinkedViews(viewConfig) {
        console.log('updating linked views:', viewConfig);
        for (let i = 0; i < viewConfig.views.length; i++) {
            if (typeof viewConfig.views[i].zoomLock ==  'undefined')
                viewConfig.views[i].zoomDispatch = d3.dispatch('zoom', 'zoomend')
            else {
                let zoomLock = viewConfig.views[i].zoomLock;
                if (typeof viewConfig.views[zoomLock].zoomDispatch == 'undefined') {
                    console.log('WARNING: view requests zoom lock to another view with an undefined zoomDispatch:', zoomLock);
                    viewConfig.views[i].zoomDispatch = d3.dispatch('zoom', 'zoomend')
                } else {
                    viewConfig.views[i].zoomDispatch = viewConfig.views[zoomLock].zoomDispatch;
                }
            }
        }

    }

    handleNewConfig(configText) {
        let viewConfigObject = JSON.parse(configText);
        this.addUids(viewConfigObject);

        this.updateLinkedViews(viewConfigObject);

        this.setState(
         {
             viewConfig : { 
                 object: viewConfigObject,
                 text: JSON.stringify(viewConfigObject)
             }
         });

    };
        
    handleOpen() {
        console.log('handling open...');
        this.setState({
            'inputOpen': !this.state.inputOpen
        });
    }

    handleViewEdit(newViewConfig) {

    }

    render() {
        /*
        let divStyle = {"paddingLeft": "20px",
                        "paddingRight": "20px"}
        */
       let divStyle = {};

        let toolbarStyle = {"position": "relative",
                       "top": "-1px"};
                    /*
                    <MultiViewEditContainer viewConfig={this.state.viewConfig}
                    handleEdit={this.handleViewEdit.bind(this)}
                    visible={this.state.inputOpen}
                        />
                        */

        return (
                <div style={divStyle}>

                <Panel 
                    className="higlass-display"
                    ref='displayPanel'
                >
                    <MultiViewContainer 
                        onNewConfig={this.handleNewConfig.bind(this)}
                        viewConfig={this.state.viewConfig} 
                    >
                    { 
                        this.state.viewConfig.object.views.map(function(view, i) 
                                                             {
                                                                 return (<MultiTrackContainer
                                                                         key={slugid.nice()}
                                                                         viewConfig={view}
                                                                         />)
                                                             })
                    }
                    </MultiViewContainer>

                </Panel>
                { (() => { if (this.state.viewConfig.object.editable) {
                return (<HiGlassInput 
                        currentConfig={this.defaultViewString} 
                        handleOpen={this.handleOpen.bind(this)}
                        inputOpen={this.state.inputOpen}
                        onNewConfig={this.handleNewConfig.bind(this)} 
                        />)
                                                      }})() }
                </div>
        );
    }
}

HiGlassApp.propTypes = {
    viewConfigString: React.PropTypes.string
}