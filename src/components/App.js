import React from 'react';
import SearchBar from './SearchBar';
import youtube from "../api/youtube";
import VideoList from './VideoList';
import VideoDetail from "./VideoDetail";


class App extends React.Component{

    // Set state
    state =  {videos: [], selectedVideo: null};

    //this add a default search and not show the loading chapter 133
    componentDidMount(){
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async (term) => {
        //console.log(term);
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        // Update state with setState
        //this.setState({ videos: response.data.items});

         // this setstate refresh the videos
         //this display the first video from the search in the VideoDetail
         this.setState({ 
            videos: response.data.items, 
            selectedVideo: response.data.items[0]
        });


    };

    //Call the video on select
    onVideoSelect = (video) => {
       // console.log('From the app', video)
       this.setState({selectedVideo: video});
    }

    render(){
        return(
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar onTermSubmitorAnyName={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;