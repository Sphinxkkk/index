class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameTime: new Date().toLocaleTimeString(),
            goldAmount: 0,
            reputation: 0,
            ability: 0,
            mood: 0,
            health: 0,
            energy: 0,
            fullness: 0,
            logMessages: []
        };
    }

    componentDidMount() {
        this.timeInterval = setInterval(() => {
            this.setState({ gameTime: new Date().toLocaleTimeString() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }

    addLogMessage(message) {
        this.setState(prevState => ({
            logMessages: [...prevState.logMessages, message]
        }));
    }

    renderStatus(icon, value) {
        return (
            <div className="status">
                <div className="status-icon"><i className={icon}></i></div>
                <div className="status-bar">
                    <div className="status-bar-inner" style={{ width: `${value}%` }}></div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="header">
                    <div className="left">
                        <div>设置</div>
                        <div>角色</div>
                    </div>
                    <div className="center">一键收钱</div>
                    <div className="right">
                        <div>排名</div>
                        <div>邀请</div>
                    </div>
                </div>

                <div className="center-area">
                    <div className="gold">金钱: <span>{this.state.goldAmount}</span></div>
                    <div className="character" style={{ backgroundImage: "url('image.png')" }}>人物界面（贴图）</div>
                    <div className="status-list">
                        <div>声望值: <span>{this.state.reputation}</span></div>
                        <div>能力: <span>{this.state.ability}</span></div>
                        <div>情绪: <span>{this.state.mood}</span></div>
                        <div>健康: <span>{this.state.health}</span></div>
                        <div>精力: <span>{this.state.energy}</span></div>
                        <div>饱食: <span>{this.state.fullness}</span></div>
                    </div>

                    <div className="time-log-container">
                        <div className="time">游戏时间: <span>{this.state.gameTime}</span></div>
                        <div className="log">
                            {this.state.logMessages.map((msg, index) => (
                                <div key={index}>{msg}</div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="actions">
                        <img src="button/BTC.png" alt="有奖竞猜" onClick={() => this.addLogMessage('有奖竞猜点击')} />
                        <img src="button/彩虹池.png" alt="NFT" onClick={() => this.addLogMessage('NFT点击')} />
                        <img src="button/市场定价.png" alt="市场定价" onClick={() => this.addLogMessage('市场定价点击')} />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
