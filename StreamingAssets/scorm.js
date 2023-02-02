var scorm = pipwerks.SCORM;

function  doinJSHello()
{
      console.log('checking...');
   //   myGameInstance.SendMessage('ScormManager', 'CallfromJS');
      console.log('checking.....');
   
}

function  setAsComplete()
{
      scorm.status("set", "complete");
}

function  setSuspendData(data)
{
      scorm.set("cmi.suspend_data", data)
}

function  setScore(score)
{
      scorm.set("cmi.objectives.n.score.raw", score)
}

function  getSuspendData()
{
      console.log(999,scorm.data.get("cmi.suspend_data"));
      myGameInstance.SendMessage('ScormManager', 'ReceiveSuspendData',scorm.data.get("cmi.suspend_data"));
       
}


 