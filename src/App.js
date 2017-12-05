import React, {Component} from 'react';

class App extends Component {
    downloadFile(fileName, content){
        const a = this.refs.a;
        a.download = fileName;
        a.href = "data:text/plain," + content;
    }
    render() {

        return (
            <div className="App">
                {/*服务端下载*/}
                <a href="https://github.com/DH-TB" download="正确答案">下载</a>

                {/*客户端下载*/}
                <a ref={'a'} onClick={this.downloadFile.bind(this,'正确答案','这是文本内容')}>下载</a>
            </div>
        );
    }
}

export default App;
