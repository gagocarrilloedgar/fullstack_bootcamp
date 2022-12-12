## 100 Days od Code

![100Days](https://res.cloudinary.com/practicaldev/image/fetch/s--x_UTPDPk--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/u5d7sosk30lm7pex8lqc.png)

## Where to do that?

- LinkedIn
- Github
- Twitter

# Git & Source Control

> **Git**: version control system.

- **Git**:

  - Commits
  - Heads / Branches

- **Basic commands:**

  - git log
  - git status
  - git diff
  - git mv/rm (marks files to be removed or names)
  - git add
  - git merge
  - git branch
  - git checkout
  - git commit

- **With distributed (Github)**:
  - git pull
  - git push
  - git clone
- **Adding a remote**: have a previous cloned repository
  - (add) git remote add origin_name remote_url
  - (to check) git remote -v
  - (push) git push origin_name branch_name

---

## GitFlow

![GitFlow](https://miro.medium.com/max/1400/1*bDd_LRmc9oVQif2n4Q14SA.png)

## GithubFlow

![GithubFlow](https://i0.wp.com/build5nines.com/wp-content/uploads/2018/01/GitHub-Flow.png)

## TrunkBased develpoment

![TrunkBased develpoment](https://trunkbaseddevelopment.com/trunk1b.png)
![Scaled](https://trunkbaseddevelopment.com/trunk1c.png)

## Standar README & Commits

---

# Foobar

Foobar is a Python library for dealing with word pluralization.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
pip install foobar
```

## Usage

```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

---

- Generator: https://readme.so/es
- Common readme: https://www.makeareadme.com/ (Standar for most OSP)

### Convetional commmits

```sh
# type(optional scope): <description>
git commit --m "type(scope): some description"
git commit --m "feat(client): update developer avatar generator"
```

- Convetional commmits: https://www.conventionalcommits.org/en/v1.0.0/ (Industry standard commits)

```sh
git commit -m "type(dev): Update usercard avatar"
```
