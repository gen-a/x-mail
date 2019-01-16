import React, {Component, Fragment} from 'react';
import PropTypes from "prop-types";

class ResizeObserver extends Component {
    constructor(props) {
        super(props);
        this.detectorRef = React.createRef();
    }
    // Set default props
    static defaultProps = {
        onResize:()=> console.log('ResizeObserver onResize property has not been set'),
        delayMs: 30
    };
    static propTypes = {
        delayMs: PropTypes.number.isRequired,
        onResize: PropTypes.func.isRequired
    };

    timeout = 0;

    onResize() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.props.onResize(), this.props.delayMs);
    }

    componentDidMount() {
        this.detectorRef.current.contentWindow.addEventListener("resize", () => this.onResize());
    }

    componentWillUnmount() {
        this.detectorRef.current.contentWindow.addEventListener("resize", () => this.onResize());
    }

    render() {
        const style = {
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: -999,
            top: 0,
            left: 0,
            border: 0,
            boxSizing: 'border-box',
            display: 'block',
            overflow: 'hidden'
        };

        return (
            <Fragment>
                <div style={{position: 'relative'}}>
                    <iframe
                        style={style}
                        height="100%"
                        width="100%"
                        seamless
                        ref={this.detectorRef}
                    />
                </div>
            </Fragment>
        );
    };


}

export default ResizeObserver;