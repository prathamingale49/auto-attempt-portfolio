---
type: PageLayout
title: Home
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/testbg2.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 40
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    type: HeroSection
    title: >-
      I'm an engineer, inventor, builder, and a learner.
    subtitle: >-
      Hi! I'm Pratham, and welcome to my website. This should be a pretty comprehensive collection of my
      projects and experiences. I'm currently an electrical engineering student at
      Georgia Tech, and I'm always keen to learn a new skill and attempt new challenges.
    media:
      align: right
      type: ImageBlock
      url: /images/goodphotooo.png
      altText: 'Pratham'
      className: 'oval-image'
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-48
          - pl-16
          - pr-16
        display: flex
        flexDirection: column
        alignItems: center
        justifyContent: center
        gap: 16
        classNames: 'lg:flex-row'
      title:
        textAlign: left
        width: 100%
        paddingRight: 16
        classNames: 'lg:flex-grow-2 lg:w-2/3' # Take 2/3 of the space on large screens
      subtitle:
        textAlign: left
        width: 100%
        paddingRight: 16
        classNames: 'lg:flex-grow-2 lg:w-2/3' # Take 2/3 of the space on large screens
      text:
        textAlign: left
        width: 100%
        paddingRight: 16
        classNames: 'lg:flex-grow-2 lg:w-2/3' # Take 2/3 of the space on large screens
      media:
        width: 100%
        maxWidth: 400px
        opacity: 70
        borderRadius: 'full'
        classNames: 'lg:flex-grow-1 lg:w-1/3 lg:ml-auto' # Take 1/3 of the space and push to the right
      actions:
        justifyContent: flex-start
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions:
      - type: Link
        label: See all projects
        url: /projects
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-two.md
      - content/pages/projects/project-three.md
      - content/pages/projects/project-one.md
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-end
    subtitle: 'Projects'
  - type: FeaturedPostsSection
    elementId: ''
    colors: colors-f
    variant: variant-d
    subtitle: Featured Posts
    showFeaturedImage: false
    actions:
      - type: Link
        label: See all posts
        url: /blog
    posts:
      - content/pages/blog/post-six.md
      - content/pages/blog/post-four.md
      - content/pages/blog/post-three.md
    showDate: true
    showExcerpt: true
    showReadMoreLink: true
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-28
          - pb-48
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-end
  - type: ContactSection
    colors: colors-f
    backgroundSize: full
    title: "Got an interesting project? Tell me more...\U0001F4AC"
    form:
      type: FormBlock
      elementId: sign-up-form
      fields:
        - name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: 1/2
          type: EmailFormControl
        - name: address
          label: Address
          hideLabel: true
          placeholder: Address
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: updatesConsent
          label: Sign me up to recieve updates
          isRequired: false
          width: full
          type: CheckboxFormControl
      submitLabel: "Submit \U0001F680"
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
---
