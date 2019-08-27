# BeCode-CLI

<p> Hello there, this repository has been created for my BeCode formation, his talking about how to use node to create an application for the CLI </p>


## About

<p> This first training on Node is a tool you can use to knows the holidays for a country select by name </p>

## :cd: How to use ?

<p> If u want to use this you can go on npm, also you need to install Node on your remote. </p>

<p>  :file_folder: Find a link ton install Node <a href="https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/"> Here </a></p>

<p> Right then your able to start the program upload the repository, go in your folder directory into BeCode-CLI, at the root you can start with the command below </p>

<p><b><pre><code>  :arrow_right: npm init</pre></code> </b></p>

<p><i> You can skip all the question about package.json</i> </p>

<p> Then a last one </p>

<p> <b><pre><code>  :arrow_right: npm install </pre></code></b></p>

<p> Finally start the program with the command : <b> holidate nameOfCountry </b></p>

<p> You may need to fix something for use the holidate command from your CLI, see how about below. Also if it doesnt work you can use  :arrow_right: <b> node index.js </b></p>

##  :white_check_mark: Some bug FIX


<p> In developpement we encountered some bug, the first one is to be enable to active a custom command on the CLI </p>

<p> Fix them with theses command from your root </p>

<ul>

<pre><code><li>:arrow_right: <b><i>mkdir ~/.npm-global</b></i></li></pre></code>
<pre><code><li>:arrow_right: <b><i>npm config set prefix '~/.npm-global'</b></i></li></pre></code>
<pre><code><li>:arrow_right: <b><i>export PATH=~/.npm-global/bin:$PATH</b></i></li></pre></code>
<pre><code><li>:arrow_right: <b><i> source ~/.profile </b></i></li><br></pre></code>

<p> :link: <a href="https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally"> Sourced from here </a></p>

</ul>



















