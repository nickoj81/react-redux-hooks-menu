import React, { useEffect } from 'react';
import { getData } from '../actions/data';
import { connect } from 'react-redux';
import Menu from './Menu';

const App = props => { 
    const { albumData, getData } = props;
    
    useEffect(() => {
        getData('./public/data.json');
    }, [getData]);

   
    
    const menuData = albumData && Object.keys(albumData).reduce((albums, band) => {
        Object.entries(albumData[band]).forEach((item) => {
            const [album, songs] = item;
            const title = `${band} - ${album}`;
            albums[title] = {
                songs,
                expandState: false,
            }
        })
        return albums
    }, {})

    return (
        <div>
            <Menu data={menuData} />
        </div>
    );
}

const mapStateToProps = state => ({
    albumData: state.data.albumData,
});

const mapDispatchToProps = dispatch => ({
    getData: url => dispatch(getData(url))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);