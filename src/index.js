import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyB6hOiXRP0otfvNiLTlsUMniJRZCVD-cQk';

class App extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null,
            searchTerm: ''
        };
        this.VideoSearch('godzilla'); // retunrs the initial search on page load
    }

    render(){
        console.log(this.state.videos[0]);
        return(
            <div>
                 <SearchBar uponVideoSearch={term=>this.VideoSearch(term)}/>   
                 <VideoDetail video={this.state.selectedVideo} />
                 <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos}/>
            </div>
        );
    }  

    VideoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos)=>{
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
        });
    }
}

ReactDOM.render(<App />,document.querySelector('.container'));
