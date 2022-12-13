![GitHub](https://img.shields.io/github/license/CascadingRadium/Air-Traffic-Distribution?style=flat)
[![GitHub forks](https://img.shields.io/github/forks/CascadingRadium/Air-Traffic-Distribution)](https://github.com/CascadingRadium/Air-Traffic-Distribution/network)
[![GitHub stars](https://img.shields.io/github/stars/CascadingRadium/Air-Traffic-Distribution)](https://github.com/CascadingRadium/Air-Traffic-Distribution/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/CascadingRadium/Air-Traffic-Distribution)](https://github.com/CascadingRadium/Air-Traffic-Distribution/issues)
![GitHub repo size](https://img.shields.io/github/repo-size/CascadingRadium/Air-Traffic-Distribution)
![GitHub last commit](https://img.shields.io/github/last-commit/CascadingRadium/Air-Traffic-Distribution)
<img src="https://developer.nvidia.com/favicon.ico" align ='right' width ='50'>
<h1> Air Traffic Distribution </h1>
<p align="justify">Capstone project done as a part of the requirements for the bachelors degree in CS at PES University (2019 - 23) guided by Dr. Preethi P.</p>
<p>
  <h3 align="center"> Contributors </h3> 
  <table align="center">
    <tr> 
      <th> Name </th>
      <th> SRN </th>
    </tr>
    <tr>
      <td> Rahul Rampure </td>
      <td> PES1UG19CS370 </td>
    </tr>
    <tr>
      <td> Raghav Tiruvallur </td>
      <td> PES1UG19CS362 </td>
    </tr>
    <tr>
      <td> Vybhav Acharya </td>
      <td> PES1UG19CS584 </td>
    </tr>
    <tr>
      <td> Shashank Navad </td>
      <td> PES1UG19CS601 </td>
    </tr>
    </table>
</p>
<h2 align="center">Abstract</h2>
<ul align="justify">
<li>The idea presented here is a Genetic Algorithm developed in CUDA and C that allows a flight dispatcher to input a flight schedule, which is a list of prospective flights with each flight’s departure and arrival airports, scheduled departure time and cruise speed.</li>
<li>The algorithm then generates paths for each of these flights so that the aeroplane encounters the least amount of mid-air traffic along its route, reducing air traffic density. We do so by considering the time-varying position of the plane and ensuring that the number of other aircraft near it remains minimal throughout its flight.</li>
<li>The algorithm considers adding a minimal delay to the departure of an aircraft as well since doing so would allow for a shorter route with lesser en-route traffic and compares the benefit of this method to a longer route which avoids most of the traffic.</li> 
<li>We add a constraint to the algorithm according to which the departure and arrival airports must have at least one runway available for the aeroplane to use at the time of departure and arrival, respectively, effectively performing an aircraft-to-runway mapping at the airports.</li>
<li>Hence, the output the dispatcher receives will be each flight’s actual departure time, which considers flight delays, and the optimal route for each aeroplane. We develop an interactive website that the dispatcher can use to enter/upload the schedule and execute the algorithm at the click of a button. Finally, we developed a python simulator which shows each aircraft’s position along its path over time.</li>
</ul>
<h2 align="center">System Requirements, Execution and Evaluation</h2>
<p align="justify"> The following set of requirements must be satisfied by the execution environment before the repository is cloned.</p>
<ul align="justify">
<li>Linux based OS (Windows/WSL not supported).</li>
<li>CUDA enabled GPU.<a href="https://developer.nvidia.com/cuda-gpus"> Check if your GPU is CUDA enabled.</a></li>
<li>NodeJS (Version > 18).<a href="https://nodejs.org/en/download/"> Download NodeJS.</a></li>
<li>Nvidia CUDA Compiler(NVCC).<a href="https://developer.nvidia.com/cuda-downloads?target_os=Linux"> Download NVCC.</a></li>
<li>Python (Version > 3.8).</li>
<li>Git and Git LFS  <code>sudo apt-get install git git-lfs</code> </li> 
</ul>
<p align="justify"> To execute the project, one needs to run the shell script “runWebsite.sh” provided in the root. The shell script will perform a first-time setup and launch the website. The user can input or upload a flight schedule, execute the algorithm to obtain the solution, and simulate the same using the buttons provided.</p>  

```
sudo chmod +x runWebsite.sh
./runWebsite.sh
```

The video below shows the website in use:

https://user-images.githubusercontent.com/53022689/207081997-caba21ec-5c32-49b5-b5d3-af1a7a801299.mp4
<p align ="justify">
The simulator is built using Python and the gifs presented below show the traffic being distributed for various test scenarios given as input. Each aircraft is represented by a unique colour and the airports are shown in blue. The airplanes are observed to be spread out and seperated by large distances mid-air, with queues being formed near the airports, similar to how it happens in reality.
</p>
<p float="left">
  <img src="Demo/SimDemo1.gif" width="40%" height="auto"/>
  <img src="Demo/SimDemo2.gif" width="58%" height="auto"/>
  <img src="Demo/SimDemo3.gif" width="46%" height="auto"/>
  <img src="Demo/SimDemo4.gif" width="52%" height="auto"/>
</p>

<p align="justify"> 
To evaluate the project, one needs to run the shell script “runEvaluator.sh” provided in the root. The shell script will generate a flight schedule to be uploaded to the website. This schedule is taken from ASDI data for August 16 - 19, 2013. The schedule is taken for a particular date in that interval. One can follow the on-screen prompts to get numerical values for our solution’s benefit over the existing Air Traffic Management system currently deployed in the USA. The relevant charts and heatmaps are also generated in the OutputImages folder. We have executed the code with the input flight schedules taken from the tested dates and have presented the output in the Results Folder.  
</p>  

```
sudo chmod +x runEvaluator.sh 
./runEvaluator.sh [DATE OPTION] [NUMBER OF FLIGHTS OPTION]

[DATE OPTION] = [2013-08-16 | 2013-08-17 | 2013-08-18 | 2013-08-19]  // Date to evaluate for
[NUMBER OF FLIGHTS OPTION] = [-1 | X]  // -1 for the complete flight schedule or X for a truncated schedule with X flights  
```
