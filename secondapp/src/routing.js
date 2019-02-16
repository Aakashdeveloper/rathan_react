<BrowserRouter>
<div>
    <header>
    <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span> 
            </button>
            <a class="navbar-brand" href="#">React App</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/posts">Posts</Link></li> 
                <li><Link to="/profile">Profile</Link></li> 
                <li><Link to="/lifecycle">LifeCycle</Link></li> 
            </ul>
            </div>
        </div>
        </nav>
    </header>
    <Route exact path="/" component={App}></Route>
    <Route exact path="/posts"  component={Posts}></Route>
    <Route path="/profile"  component={Profile}></Route>
    <Route path="/posts/:id"  component={PostDetails}></Route>
    <Route path="/lifecycle"  component={Lifecycle}></Route>
</div>
</BrowserRouter>