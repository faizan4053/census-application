import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                 <nav class="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <span class="navbar-brand mb-0 h1">Census Application</span>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderComponent;