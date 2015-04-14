



var HomePage = React.createClass({
    render: function() {
        return (
            <div>
                <Header text="Consumer Directory" back="false"/>
                <div className="text-center">
                    <form className="form-inline" role="form">
                        <div className="form-group">
                            <input className="form-control" id="text" type="text" placeholder="Search for..." />
                            <button type="button" className="btn btn-default"> 
                                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                            </button>
                        </div>
                    </form>
                </div><br />
                <div className="list-group">
                    <ConsumerList consumers={this.props.consumers}/>
                </div>
            </div>
        );
    }
});

