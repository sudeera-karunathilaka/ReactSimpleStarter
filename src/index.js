import React , {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
//Import lodash
import _ from 'lodash';

//Need to give a path reference for any project files.
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';

//Use "youtube-api-search" package for accessing youtube videos using following API keys.
//This key is taken using Google API manager.
const YOUTUBE_API_KEY='';

//Create a new component. This component should produce some HTML
class App extends Component{

    constructor(props){
        super(props);
        //Cannot use this.setState() within a constructor
        //This is component level state and is localized
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('Mt Everest');
    }

    videoSearch(term){
        //Search youtube 
        YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        //Let lodash know that videoSearch() needs to be run once every 300ms
        const videoSearchDebounced = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            //Using debounced function on search bar
            <div> 
                <SearchBar onSearchTermChange = {videoSearchDebounced}/>
                <VideoDetail video = {this.state.selectedVideo} />
                <VideoList 
                    //This is the callback function, which will invoke when a video is selected from the list
                    onVideoSelect = {selectedVideo=>this.setState({selectedVideo})}
                    videos = {this.state.videos} 
                />
            </div>
        );
    }
}
//Take this component's generated HTML and put it on the page (in the DOM)
//"App" is a class and "<App></App>" or "<App />" creates an instance from that class.
ReactDom.render(<App></App>, document.querySelector('.container'));
//Can use "ReactDom.render(<App />);" ES6 feature
//If the 2nd parameter is missed, it will result in a "Uncaught Error: Target container is not a DOM element."


/*
    Functional component - 
    Component with a single function where some information goes in and a JSX comes out.

    Class component - 
    Component with an internal record keeping. Be aware itself and what happened after being rendered. 

    Callback function - 
    Should not go beyond 2 levels.
*/
