Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]},Array.prototype.randomize=function(){for(var a,b,c=this.length;--c;)a=Math.floor(Math.random()*(c-1)),b=this[c],this[c]=this[a],this[a]=b},Array.prototype.clone=function(){return this.slice(0)},String.prototype.randomRepeat=function(a){return this+new Array(Math.floor(Math.random()*(a-1))).join(this)};var generateSentence,generateInsult,generateParagraph,randomBoolean=function(){return 1==Math.round(Math.random())},insults=["burn in hell","check your %privilege privilege","die in a fire","go drown in your own piss","fuck you","kill yourself","go play in traffic","make love to yourself in a furnace","please die","rot in hell","screw you","shut the fuck up","shut up","drop dead","fuck off"],insultAdverbs=["deluded","fucking","ignorant","goddamn","judgemental","worthless","entitled","oppressive"],insultNouns=["asshole","bigot","hitler","oppressor","piece of shit","rapist","scum","subhuman","nazi","fascist","rape-apologist","MRA","neckbeard","pedophile","virgin","basement dweller","dudebro","brogrammer","redditor","creep"],marginalizedNouns=["activist","agender","appearance","asian","attractive","bi","bigender","black","celestial","chubby","closet","color","curvy","dandy","deathfat","demi","differently abled","disabled","diversity","dysphoria","estrogen-affinity","ethnic","ethnicity","fat love","fat","fatty","female","genderfuck","genderless","body hair","height","indigenous","intersectionality","intersexual","invisible","kin","little person","marginalized","minority","multigender","non-gender","non-white","obesity","otherkin","omnisexual","pansexual","polygender","polyspecies","privilege","prosthetic","queer","radfem","skinny","smallfat","stretchmark","thin","third-gender","trans*","transethnic","transgender","transman","transwoman","trigger","two-spirit","womyn","wymyn","saami","native american","hijra","transnormative","LGBTQIA+","cross-dresser","androphilia","gynephilia","PoC","WoC"],marginalizedAdverbs=["chauvinistic","denying","discriminating","hypersexualizing","intolerant","misogynistic","nphobic","oppressive","phobic","racist","sexualizing","shaming","objectifying","attacking","ignoring","rape-culture-supporting","sexist","patriarchal","close-minded","antediluvian"],marginalizedIsms=["feminist","fatist","racist","lesbianist","freeganist"],privilegedNouns=["able-body","binary","cis","cisgender","cishet","hetero","male","middle-class","smallfat","thin","white"],privilegedAdverbs=["privileged","overprivileged","normative"],privilegedIsms=["ableist","classist","patriarchist","sexist","anti-feminist","kyriarchist","misogynist","chauvinist","nazi","transmisogynist"],sexualities=function(){var a=[],b=["dandy","demi","gender"],c=["amorous","femme","fluid","queer","fuck"],d=["a","bi","demi","multi","non","omni","pan","para","poly"],e=["gender","sexual","romantic","queer"];return $.each(b,function(b,d){$.each(c,function(b,c){a.push(d+c)})}),$.each(d,function(b,c){$.each(e,function(b,d){a.push(c+d)})}),a}(),otherAwesomeStuff=["gender abolition","female superiority"],otherTerribleStuff=["internalized misogynism","internalized patriarchy","male domination","gender roles","rape culture","institutionalized racism"],randomPrivilege=function(){return privilegedNouns.random()},randomInsult=function(){return randomBoolean()?insultAdverbs.random()+" "+insultNouns.random():insultNouns.random()},randomAwesomeStuff=function(){return otherAwesomeStuff.random()},randomTerribleStuff=function(){return otherTerribleStuff.random()},verbs=[["deny","denying","denial"],["discriminate","discriminating","discrimination"],["sexualize","sexualizing","sexualization"],["hypersexualize","hypersexualizing","hypersexualization"],["oppress","oppressing","oppression"],["shame","shaming","shaming"],["marginalize","marginalizing","marginalization"],["objectify","objectifying","objectification"],["attack","attacking","attacking"],["ignore","ignoring","ignoring"]],sentences=[{forms:[1],format:"you %insult, stop %verb %marginalized-%person",type:"!"},{forms:[1],format:"you are a %marginalized-%verb %insult",type:"!"},{forms:[1],format:"you should stop fucking %verb %marginalized-%person",type:"!"},{forms:[0],format:"why the fuck do you feel the need to %verb %marginalized-%person you %insult",type:"?"},{forms:[0],format:"leave %marginalized-%person the fuck alone you %insult",type:"!"},{forms:[1],format:"stop fucking %verb %marginalized-%person you %insult",type:"!"},{forms:[0],format:"what the fuck has %subject ever done to you you %insult",type:"!"},{forms:[2],format:"your %verb of %marginalized-%person is problematic",type:"!"}],subjects=[{names:["xe","ze"]}],intros=["wow. just. wow.","no. just. no.","this. is. NOT. okay.","just a friendly reminder:","[TW: rant]"],statements=["you should be ashamed of yourself","you make me sick","%insult","die in a fire","stop offending me you %insult","you are the worst person alive","people like you deserve to die","what the fuck do you have against %awesomestuff you %insult","you are worse than hitler","it's not my job to educate you you %insult","fuck your %terriblestuff","you are perpetuating %terriblestuff you %insult","you are triggering me you %insult","stop tone policing me you %insult","i hope you fucking die you %insult"],emoji=["(◕﹏◕✿)","（　｀ー´）","(•﹏•)","└(｀0´)┘"];marginalizedNouns=marginalizedNouns.concat(sexualities),generateSentence=function(){var a=Math.floor(verbs.length*Math.random()),b=sentences.random(),c=subjects.random(),d=verbs[a],e=b.format;return e=e.replace(/%subject/gi,c.names.random()),e=e.replace(/%verb/gi,d[b.forms.random()]),e=e.replace(/%marginalized/gi,marginalizedNouns.random()),e=e.replace(/%person/gi,["identifying","aligned"].random()+" "+["people","personalities","individuals"].random()),e+=b.type.randomRepeat(10)},generateInsult=function(a){var b="";return a?(b+=insults.random(),b+=", you ",randomBoolean()&&(b+=insultAdverbs.random()+" "),randomBoolean()&&(b+=(randomBoolean()?marginalizedIsms.random():marginalizedNouns.random())+"-"+marginalizedAdverbs.random()+", ")):b+="you ",b+=privilegedNouns.random()+"-"+privilegedAdverbs.random()+" ",b+=randomBoolean()?insultNouns.random()+" ":privilegedIsms.random()+" ",b.trim()},generateParagraph=function(a){var b,c,d=[],e=3+10*Math.random(),f="";for(a&&(e=1),b=0;e>b;b+=1)0===b?(Math.random()>.3&&!a&&(f+=intros.random()+" "),f+=generateInsult(!0),a||(f+="!".randomRepeat(10))):f=[generateInsult(!1)+"!".randomRepeat(10),generateSentence(),statements.random()+"!".randomRepeat(10)].random().trim(),f=f.replace(/%privilege/gi,randomPrivilege),f=f.replace(/%insult/gi,randomInsult),f=f.replace(/%terriblestuff/gi,randomTerribleStuff),f=f.replace(/%awesomestuff/gi,randomAwesomeStuff),f=f.replace(/you are/g,function(){return randomBoolean()?"you're literally":"you're"}),f=randomBoolean()||a?f.toUpperCase():f,$("#tumblrize-grammar").prop("checked")&&(f=f.replace(/\b /g,function(){return Math.random()>.05?" ":[",","."].random().randomRepeat(4)}),f=f.replace(/^(\w)/g,function(a,b){return Math.random()>.3?b:b.toLowerCase()}),Math.random()>.8&&(c="~".randomRepeat(5),Math.random()>.3&&(c+="*"),f=c+f+c.split("").reverse().join("")),f=f.replace(/you're/g,"ur"),f=f.replace(/YOU'RE/g,"UR"),f=f.replace(/you/g,"u"),f=f.replace(/YOU/g,"U"),f=f.replace(/people/g,"ppl"),f=f.replace(/PEOPLE/g,"PPL"),Math.random()>.8&&(f+=emoji.random())),d.push(f);return d=d.join(" "),a||(d+="!".randomRepeat(10)),d},$(document).ready(function(){$("#argument").removeClass("loading").text(generateParagraph(!0)),$(".controls button.generate-insult").click(function(){$("#argument").text(generateParagraph(!0))}),$(".controls button.generate-rant").click(function(){$("#argument").text(generateParagraph(!1))})});