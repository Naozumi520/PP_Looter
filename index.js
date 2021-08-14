const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
config_fs = './config.json'
const fs = require('fs')
const rawdata = fs.readFileSync(config_fs)
const config = JSON.parse(rawdata)
const nodeosu = require('node-osu')
const osu = new nodeosu.Api(config.api_key, {
  notFoundAsError: true,
  completeScores: true,
  parseNumeric: true
})
const moment = require('moment')
require('moment-duration-format')
const serp = require('serp-extended')
const question = (str) => new Promise(resolve => rl.question(str, resolve))

function numToMod (num) {
  const number = parseInt(num)
  const mod_list = []
  if (number & 1 << 0) mod_list.push('NF')
  if (number & 1 << 1) mod_list.push('EZ')
  if (number & 1 << 3) mod_list.push('HD')
  if (number & 1 << 4) mod_list.push('HR')
  if (number & 1 << 5) mod_list.push('SD')
  if (number & 1 << 9) mod_list.push('NC')
  else if (number & 1 << 6) mod_list.push('DT')
  if (number & 1 << 8) mod_list.push('HT')
  if (number & 1 << 10) mod_list.push('FL')
  if (number & 1 << 12) mod_list.push('SO')
  if (number & 1 << 14) mod_list.push('PF')
  return mod_list
}

const steps = {
  start: async () => {
    return steps.username()
  },
  username: async () => {
    const input_username = await question('Enter your username: ')
    return steps.conform(input_username)
  },
  conform: async (u) => {
    const conform = await question(`Correct username "${u}" ? (Yes/No) `)
    if (conform.toLowerCase() === 'yes' || conform.toLowerCase() === 'y') {
      return steps.processing(u)
    } else if (conform.toLowerCase() === 'no' || conform.toLowerCase() === 'n') {
      return steps.username()
    } else {
      return steps.conform(u)
    }
  },
  processing: async (u) => {
    const self = await osu.getUser({ u: u })
    const self_total_play_time = moment.duration(self.secondsPlayed, 'seconds').format('dd:hh')
      .replace(':', 'd ') + 'h' // 20d 14h
    const search_parameters = `${config.uurl} "Total Play Time."  "osu!" ${self_total_play_time}` // site:osu.ppy.sh/users/ "Total Play Time."  "osu!" "20d" 14h
    console.log('\x1b[32m', `Search with parameters: '${search_parameters}'`)
    const default_options = {
      ignore: ['osu.ppy.sh/users/ctb/', 'osu.ppy.sh/users/taiko/', 'osu.ppy.sh/users/mania/'],
      qs: {
        q: search_parameters,
        nfpr: config.nfpr, // 1
        filter: config.filter, // 0
        pws: config.filter, // 0
        delay: config.delay // 2000
      },
      num: config.num // 100
    }
    const result_title_username = await serp.search(default_options)
    const arr = []
    result_title_username.forEach(player => {
      arr.push(player.title.split(' · ')[0])
    })
    for (const user of arr) {
      osu.getUserBest({ u: user }).then(scores => {
        const result = [{
          score: scores[0].score,
          User_name: user,
          beatmap_title: scores[0].beatmap.title,
          used_mod: numToMod(scores[0].raw_mods),
          accuracy: (parseFloat(scores[0].accuracy).toFixed(4) * 100).toFixed(2) + '%',
          maxCombo: scores[0].maxCombo,
          raw_date: scores[0].raw_date,
          rank: scores[0].rank,
          PP: scores[0].pp
        },
        {
          score: scores[1].score,
          User_name: user,
          beatmap_title: scores[1].beatmap.title,
          used_mod: numToMod(scores[1].raw_mods),
          accuracy: (parseFloat(scores[1].accuracy).toFixed(4) * 100).toFixed(2) + '%',
          maxCombo: scores[1].maxCombo,
          raw_date: scores[1].raw_date,
          rank: scores[1].rank,
          PP: scores[1].pp
        },
        {
          score: scores[2].score,
          User_name: user,
          beatmap_title: scores[2].beatmap.title,
          used_mod: numToMod(scores[2].raw_mods),
          accuracy: (parseFloat(scores[2].accuracy).toFixed(4) * 100).toFixed(2) + '%',
          maxCombo: scores[2].maxCombo,
          raw_date: scores[2].raw_date,
          rank: scores[2].rank,
          PP: scores[2].pp
        },
        {
          score: scores[3].score,
          User_name: user,
          beatmap_title: scores[3].beatmap.title,
          used_mod: numToMod(scores[3].raw_mods),
          accuracy: (parseFloat(scores[3].accuracy).toFixed(4) * 100).toFixed(2) + '%',
          maxCombo: scores[3].maxCombo,
          raw_date: scores[3].raw_date,
          rank: scores[3].rank,
          PP: scores[3].pp
        },
        {
          score: scores[4].score,
          User_name: user,
          beatmap_title: scores[4].beatmap.title,
          used_mod: numToMod(scores[4].raw_mods),
          accuracy: (parseFloat(scores[4].accuracy).toFixed(4) * 100).toFixed(2) + '%',
          maxCombo: scores[4].maxCombo,
          raw_date: scores[4].raw_date,
          rank: scores[4].rank,
          PP: scores[4].pp
        },
        {
          score: scores[5].score,
          User_name: user,
          beatmap_title: scores[5].beatmap.title,
          used_mod: numToMod(scores[5].raw_mods),
          accuracy: (parseFloat(scores[5].accuracy).toFixed(4) * 100).toFixed(2) + '%',
          maxCombo: scores[5].maxCombo,
          raw_date: scores[5].raw_date,
          rank: scores[5].rank,
          PP: scores[5].pp
        },
        {
          score: scores[6].score,
          User_name: user,
          beatmap_title: scores[6].beatmap.title,
          used_mod: numToMod(scores[6].raw_mods),
          accuracy: (parseFloat(scores[6].accuracy).toFixed(4) * 100).toFixed(2) + '%',
          maxCombo: scores[6].maxCombo,
          raw_date: scores[6].raw_date,
          rank: scores[6].rank,
          PP: scores[6].pp
        },
        {
          score: scores[7].score,
          User_name: user,
          beatmap_title: scores[7].beatmap.title,
          used_mod: numToMod(scores[7].raw_mods),
          accuracy: (parseFloat(scores[7].accuracy).toFixed(4) * 100).toFixed(2) + '%',
          maxCombo: scores[7].maxCombo,
          raw_date: scores[7].raw_date,
          rank: scores[7].rank,
          PP: scores[7].pp
        },
        {
          score: scores[8].score,
          User_name: user,
          beatmap_title: scores[8].beatmap.title,
          used_mod: numToMod(scores[8].raw_mods),
          accuracy: (parseFloat(scores[8].accuracy).toFixed(4) * 100).toFixed(2) + '%',
          maxCombo: scores[8].maxCombo,
          raw_date: scores[8].raw_date,
          rank: scores[8].rank,
          PP: scores[8].pp
        }
        ]
        console.table(result)
        return steps.end()
      })
    }
  },
  end: async () => {
    rl.close()
  }
}
steps.start()
