import React from 'react';
import { IWixStatic } from '@wix/native-components-infra/dist/src/types/wix-sdk';
import './Settings.global.scss';
import { get } from 'lodash';
import { WixSDK } from 'yoshi-flow-editor-runtime';
import {
  Slider,
  ColorPickerColorSpace,
  Divider,
  TextLabel,
} from '@wix/wix-base-ui';
import css from './Settings.scss';

interface ISettingsProps {
  Wix: IWixStatic;
}

const defaultSettingsValues = {
  backgroundColor: '#ffffff',
  buttonBackgroundColor: '#ffffff',
  fontSize: 14,
};

export class Settings extends React.Component<ISettingsProps> {
  state = defaultSettingsValues;

  componentDidMount() {
    this.props.Wix.Styles.getStyleParams((styleParams: any) => {
      this.setState({
        backgroundColor: get(
          styleParams,
          'colors.backgroundColor.value',
          this.state.backgroundColor,
        ),
        buttonBackgroundColor: get(
          styleParams,
          'colors.buttonBackgroundColor.value',
          this.state.buttonBackgroundColor,
        ),
        fontSize: get(styleParams, 'fonts.fontSize.size', this.state.fontSize),
      });
    });
  }

  updateHeaderBackgroundColor = (backgroundColor: string) => {
    this.props.Wix.Styles.setColorParam('backgroundColor', {
      value: { color: false, opacity: 1, rgba: backgroundColor },
    });
    this.setState({ backgroundColor });
  };

  updateButtonBackgroundColor = (buttonBackgroundColor: string) => {
    this.props.Wix.Styles.setColorParam('buttonBackgroundColor', {
      value: { color: false, opacity: 1, rgba: buttonBackgroundColor },
    });
    this.setState({ buttonBackgroundColor });
  };

  updateHeaderFontSize = (fontSize: string) => {
    this.props.Wix.Styles.setFontParam('fontSize', {
      value: {
        family: 'roboto-bold',
        fontStyleParam: true,
        preset: 'Custom',
        size: Number(fontSize),
        style: { bold: false, italic: false, underline: false },
        value: `font:normal normal normal ${fontSize}px/1em roboto-bold,roboto,sans-serif;`,
      },
    });
    this.setState({ fontSize });
  };

  render() {
    return (
      <div>
        <section className={css.section}>
          <TextLabel
            type="T02"
            value="Background color"
            shouldTranslate={false}
          />
          <div className={css.colorPicker}>
            <ColorPickerColorSpace
              onChange={this.updateHeaderBackgroundColor}
              value={this.state.backgroundColor}
            />
          </div>
        </section>
        <Divider long={true} />
        <section className={css.section}>
          <TextLabel
            type="T02"
            value="Font size (px)"
            shouldTranslate={false}
          />
          <Slider
            value={this.state.fontSize}
            onChange={this.updateHeaderFontSize}
          />
        </section>
        <section className={css.section}>
          <TextLabel
            type="T02"
            value="Button Background color"
            shouldTranslate={false}
          />
          <div className={css.colorPicker}>
            <ColorPickerColorSpace
              onChange={this.updateButtonBackgroundColor}
              value={this.state.buttonBackgroundColor}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default () => (
  <WixSDK isEditor>{({ Wix }) => <Settings Wix={Wix} />}</WixSDK>
);
